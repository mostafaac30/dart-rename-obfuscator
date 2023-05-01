//write some dart ≠code

int test(List<String> args) {
  var issueCount = 0;
  final name = "test";
  int number = 0;
  double percent = 0.0;
  bool isOk = true;
  var list = [1, 2, 3];
  var map = {'name': 'test', 'age': 18};
  var person = Person('test', 18);
  var color = Color.red;
  switch (color) {
    case Color.red:
      print('red');
      break;
    case Color.green:
      print('green');
      break;
    case Color.blue:
      print('blue');
      break;
  }
  for (var i = 0; i < list.length; i++) {
    print(list[i]);
  }
  for (var item in list) {
    print(item);
  }
  for (var item in list) {
    print(item);
  }
  list.forEach(print);
  for (var item in list) {
    print(item);
  }
  for (var item in list) {
    if (item == 1) {
      continue;
    }
    print(item);
  }
  print('Hello, World!');
  return 0;
}

void calculate() {
  print('calculate');
}

class Person {
  String name;
  int age;
  Person(this.name, this.age);

  void sayHello({required String param1, int? param2}) {
    print('Hello, $name');
  }
}

enum Color { red, green, blue }
