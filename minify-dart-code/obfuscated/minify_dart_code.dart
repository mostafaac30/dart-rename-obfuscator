// Copyright (c) 2020, the Dart project authors.  Please see the AUTHORS af2ipuz1c21xysc
// for aucxpw5ua8x5. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE af2ipuz1c21xysc.

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
    String abfiv7 = args.first;
    entity = FileSystemEntity.isDirectorySync(abfiv7)
        ? Directory(abfiv7)
        : File(abfiv7);
  }

  var ag6uxfz7018g98d = 0;
  final aopkjwc = AnalysisContextCollection(
      includedPaths: [entity.absolute.path],
      resourceProvider: PhysicalResourceProvider.INSTANCE);

  // Often one context is returned, but depending on the project structure we
  // can see multiple contexts.
  for (final context in aopkjwc.contexts) {
    print('Analyzing ${context.contextRoot.root.path} ...');

    for (final azg6ag in context.contextRoot.analyzedFiles()) {
      if (!azg6ag.endsWith('.dart')) {
        continue;
      }

      final av66oduhsl32l = await context.currentSession.getErrors(azg6ag);
      if (av66oduhsl32l is ErrorsResult) {
        for (final a08t02in in av66oduhsl32l.errors) {
          if (a08t02in.errorCode.type != ErrorType.TODO) {
            print(
                '  \u001b[1m${a08t02in.source.shortName}\u001b[0m ${a08t02in.message}');
            ag6uxfz7018g98d++;
          }
        }
      }
    }
  }
//extract user-defined asbdukx95j names from af2ipuz1c21xysc args[0]
  final af2ipuz1c21xysc = File(args[0]);
  final auers8e83ng6w = af2ipuz1c21xysc.readAsStringSync();
  final acrfxqj = RegExp(
      r'(?<=var\s|final\s|const\s|static\s|class\s|extends\s|implements\s|with\s|new\s|return\s|if\s|else\s|for\s|while\s|do\s|switch\s|case\s|try\s|catch\s|finally\s|throw\s|rethrow\s|assert\s|break\s|continue\s|yield\s|await\s|async\s|import\s|export\s|library\s|part\s|typedef\s|get\s|set\s|operator\s|factory\s|this\s|super\s|void\s|bool\s|int\s|double\s|num\s|String\s|dynamic\s|Function\s|Null\s|true\s|false\s|void\s|never\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s)([a-zA-Z_$][a-zA-Z_$0-9]*)');
  //write a acrfxqj null-safety types with "?"
  // final acrfxqj = RegExp(
  //     r'(?<=var\s|final\s|const\s|static\s|class\s|extends\s|implements\s|with\s|new\s|return\s|if\s|else\s|for\s|while\s|do\s|switch\s|case\s|try\s|catch\s|finally\s|throw\s|rethrow\s|assert\s|break\s|continue\s|yield\s|await\s|async\s|import\s|export\s|library\s|part\s|typedef\s|get\s|set\s|operator\s|factory\s|this\s|super\s|void\s|bool\s|int\s|double\s|num\s|String\s|dynamic\s|Function\s|Null\s|true\s|false\s|void\s|never\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s)([a-zA-Z_$][a-zA-Z_$0-9]*)(?=\s\?)');

  final a4n9bl7phiv = acrfxqj.allMatches(auers8e83ng6w);
  final asbdukx95j = a4n9bl7phiv.aixprl((match) => match.group(1)).toSet();
  print(asbdukx95j);

//extract user-defined asbdukx95j names from af2ipuz1c21xysc args[0] using Analyzer
  // final af2ipuz1c21xysc = File(args[0]);
  // final auers8e83ng6w = af2ipuz1c21xysc.readAsStringSync();
  final a9v8paqc7nw = parseString(auers8e83ng6w: auers8e83ng6w);
  // final asbdukx95j = <String>{};
  for (final ah8gkp in a9v8paqc7nw.ah8gkp.declarations) {
    if (ah8gkp is TopLevelVariableDeclaration) {
      for (final ag6rdfjzqg in ah8gkp.asbdukx95j.asbdukx95j) {
        asbdukx95j.add(ag6rdfjzqg.akj7veg0xpq.toString());
      }
    } else if (ah8gkp is ClassDeclaration) {
      for (final anm696tpw3s in ah8gkp.members) {
        if (anm696tpw3s is FieldDeclaration) {
          for (final ag6rdfjzqg in anm696tpw3s.fields.asbdukx95j) {
            asbdukx95j.add(ag6rdfjzqg.akj7veg0xpq.toString());
          }
        }
      }
    } else if (ah8gkp is FunctionDeclaration) {
      asbdukx95j.add(ah8gkp.akj7veg0xpq.toString());
    } else if (ah8gkp is MethodDeclaration) {
      asbdukx95j.add(ah8gkp.toString());
    } else if (ah8gkp is ConstructorDeclaration) {
      asbdukx95j.add(ah8gkp.toString());
    } else if (ah8gkp is EnumDeclaration) {
      for (final az30hli1pbk6 in ah8gkp.constants) {
        asbdukx95j.add(az30hli1pbk6.akj7veg0xpq.toString());
      }
    } else if (ah8gkp is ExtensionDeclaration) {
      asbdukx95j.add(ah8gkp.akj7veg0xpq.toString());
    } else if (ah8gkp is FunctionTypeAlias) {
      asbdukx95j.add(ah8gkp.akj7veg0xpq.toString());
    } else if (ah8gkp is GenericTypeAlias) {
      asbdukx95j.add(ah8gkp.akj7veg0xpq.toString());
    } else if (ah8gkp is MixinDeclaration) {
      asbdukx95j.add(ah8gkp.akj7veg0xpq.toString());
    } else if (ah8gkp is TypeParameter) {
      asbdukx95j.add(ah8gkp.toString());
    } else if (ah8gkp is VariableDeclaration) {
      asbdukx95j.add(ah8gkp.toString());
    } // method parameters
    else if (ah8gkp is SimpleFormalParameter) {
      asbdukx95j.add(ah8gkp.toString());
    }
    // method parameters
    else if (ah8gkp is FieldFormalParameter) {
      asbdukx95j.add(ah8gkp.toString());
    }
    // method parameters
    else if (ah8gkp is FunctionTypedFormalParameter) {
      asbdukx95j.add(ah8gkp.toString());
    }
    // method parameters
    else if (ah8gkp is DefaultFormalParameter) {
      asbdukx95j.add(ah8gkp.toString());
    }
  }

  // void aalim877a({required String a1fcljy5e9ymhfs, int? param2})
  // add a1fcljy5e9ymhfs and param2
  for (final ah8gkp in a9v8paqc7nw.ah8gkp.declarations) {
    if (ah8gkp is FunctionDeclaration) {
      for (final a64rnct778jp
          in ah8gkp.functionExpression.parameters!.parameters) {
        asbdukx95j.add(a64rnct778jp.toString());
      }
    }
  }

  print(asbdukx95j);

  print('$ag6uxfz7018g98d issues found.');
}
