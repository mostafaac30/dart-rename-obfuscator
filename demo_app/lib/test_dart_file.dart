import 'package:flutter/material.dart';

enum Status {
  active,
  inactive,
}

abstract class Vehicle {
  String name;
  int year;
  double price;
  void move();
}

class Car extends Vehicle {
  @override
  String name;

  @override
  int year;

  @override
  double price;

  Car({required this.name, required this.year, required this.price});

  @override
  void move() {
    print('The car is moving.');
  }
}

class MyApp extends StatelessWidget {
  final String title;

  MyApp({required this.title});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: title,
      home: Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('This is a Flutter app'),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  bool isUserDefined = isUserDefinedIdentifier('MyApp');
                  print('Is MyApp a user-defined identifier? $isUserDefined');
                },
                child: Text('Check if MyApp is a user-defined identifier'),
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  bool isUserDefined = isUserDefinedIdentifier('Car');
                  print('Is Car a user-defined identifier? $isUserDefined');
                },
                child: Text('Check if Car is a user-defined identifier'),
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  bool isUserDefined = isUserDefinedIdentifier('move');
                  print('Is move a user-defined identifier? $isUserDefined');
                },
                child: Text('Check if move is a user-defined identifier'),
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  bool isUserDefined = isUserDefinedIdentifier('Status');
                  print('Is Status a user-defined identifier? $isUserDefined');
                },
                child: Text('Check if Status is a user-defined identifier'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  bool isUserDefinedIdentifier(String identifier) {
    // Your isUserDefinedIdentifier function logic goes here
  }
}

void main() {
  runApp(MyApp(title: 'Flutter App'));
}
