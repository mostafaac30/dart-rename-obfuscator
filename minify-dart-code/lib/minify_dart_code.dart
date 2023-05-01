// Copyright (c) 2020, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/analysis/utilities.dart';
import 'package:analyzer/dart/ast/ast.dart';
import 'package:analyzer/error/error.dart';
import 'package:analyzer/file_system/physical_file_system.dart';

/// A simple example of using the AnalysisContextCollection API.
void main(List<String> args) async {
  FileSystemEntity entity = Directory.current;
  if (args.isNotEmpty) {
    String arg = args.first;
    entity = FileSystemEntity.isDirectorySync(arg) ? Directory(arg) : File(arg);
  }

  var issueCount = 0;
  final collection = AnalysisContextCollection(
      includedPaths: [entity.absolute.path],
      resourceProvider: PhysicalResourceProvider.INSTANCE);

  // Often one context is returned, but depending on the project structure we
  // can see multiple contexts.
  for (final context in collection.contexts) {
    print('Analyzing ${context.contextRoot.root.path} ...');

    for (final filePath in context.contextRoot.analyzedFiles()) {
      if (!filePath.endsWith('.dart')) {
        continue;
      }

      final errorsResult = await context.currentSession.getErrors(filePath);
      if (errorsResult is ErrorsResult) {
        for (final error in errorsResult.errors) {
          if (error.errorCode.type != ErrorType.TODO) {
            print(
                '  \u001b[1m${error.source.shortName}\u001b[0m ${error.message}');
            issueCount++;
          }
        }
      }
    }
  }
//extract user-defined variables names from file args[0]
  final file = File(args[0]);
  final content = file.readAsStringSync();
  final regex = RegExp(
      r'(?<=var\s|final\s|const\s|static\s|class\s|extends\s|implements\s|with\s|new\s|return\s|if\s|else\s|for\s|while\s|do\s|switch\s|case\s|try\s|catch\s|finally\s|throw\s|rethrow\s|assert\s|break\s|continue\s|yield\s|await\s|async\s|import\s|export\s|library\s|part\s|typedef\s|get\s|set\s|operator\s|factory\s|this\s|super\s|void\s|bool\s|int\s|double\s|num\s|String\s|dynamic\s|Function\s|Null\s|true\s|false\s|void\s|never\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s)([a-zA-Z_$][a-zA-Z_$0-9]*)');
  //write a regex null-safety types with "?"
  // final regex = RegExp(
  //     r'(?<=var\s|final\s|const\s|static\s|class\s|extends\s|implements\s|with\s|new\s|return\s|if\s|else\s|for\s|while\s|do\s|switch\s|case\s|try\s|catch\s|finally\s|throw\s|rethrow\s|assert\s|break\s|continue\s|yield\s|await\s|async\s|import\s|export\s|library\s|part\s|typedef\s|get\s|set\s|operator\s|factory\s|this\s|super\s|void\s|bool\s|int\s|double\s|num\s|String\s|dynamic\s|Function\s|Null\s|true\s|false\s|void\s|never\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s)([a-zA-Z_$][a-zA-Z_$0-9]*)(?=\s\?)');

  final matches = regex.allMatches(content);
  final variables = matches.map((match) => match.group(1)).toSet();
  print(variables);

//extract user-defined variables names from file args[0] using Analyzer
  // final file = File(args[0]);
  // final content = file.readAsStringSync();
  final parseResult = parseString(content: content);
  // final variables = <String>{};
  for (final unit in parseResult.unit.declarations) {
    if (unit is TopLevelVariableDeclaration) {
      for (final variable in unit.variables.variables) {
        variables.add(variable.name.toString());
      }
    } else if (unit is ClassDeclaration) {
      for (final field in unit.members) {
        if (field is FieldDeclaration) {
          for (final variable in field.fields.variables) {
            variables.add(variable.name.toString());
          }
        }
      }
    } else if (unit is FunctionDeclaration) {
      variables.add(unit.name.toString());
    } else if (unit is MethodDeclaration) {
      variables.add(unit.toString());
    } else if (unit is ConstructorDeclaration) {
      variables.add(unit.toString());
    } else if (unit is EnumDeclaration) {
      for (final constant in unit.constants) {
        variables.add(constant.name.toString());
      }
    } else if (unit is ExtensionDeclaration) {
      variables.add(unit.name.toString());
    } else if (unit is FunctionTypeAlias) {
      variables.add(unit.name.toString());
    } else if (unit is GenericTypeAlias) {
      variables.add(unit.name.toString());
    } else if (unit is MixinDeclaration) {
      variables.add(unit.name.toString());
    } else if (unit is TypeParameter) {
      variables.add(unit.toString());
    } else if (unit is VariableDeclaration) {
      variables.add(unit.toString());
    } // method parameters
    else if (unit is SimpleFormalParameter) {
      variables.add(unit.toString());
    }
    // method parameters
    else if (unit is FieldFormalParameter) {
      variables.add(unit.toString());
    }
    // method parameters
    else if (unit is FunctionTypedFormalParameter) {
      variables.add(unit.toString());
    }
    // method parameters
    else if (unit is DefaultFormalParameter) {
      variables.add(unit.toString());
    }
  }

  // void sayHello({required String param1, int? param2})
  // add param1 and param2
  for (final unit in parseResult.unit.declarations) {
    if (unit is FunctionDeclaration) {
      for (final parameter in unit.functionExpression.parameters!.parameters) {
        variables.add(parameter.toString());
      }
    }
  }

  print(variables);

  print('$issueCount issues found.');
}
