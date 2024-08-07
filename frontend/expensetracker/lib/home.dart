import 'package:expensetracker/constants.dart';
import 'package:flutter/material.dart';

class HomeView extends StatefulWidget {
  const HomeView({super.key});

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ConstantsHelper.darkerBg,
      body: SafeArea(
        child: Container(
          child: const Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              "hello",
              style: TextStyle(color: Colors.white),
            ),
          ),
          margin: const EdgeInsets.all(16),
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height * 0.2,
          decoration: BoxDecoration(
            color: ConstantsHelper.darkBg,
          ),
        ),
      ),
    );
  }
}
