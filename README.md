# Playwright E2E Tests – BlazeDemo (Basic Version)

This repository contains automated end-to-end (E2E) tests for the [BlazeDemo](https://blazedemo.com/) web application, built with Playwright using JavaScript.

The main goal of this project is to demonstrate the fundamentals of E2E test automation, focusing on real user flows and basic test design.

---

## 📚 Context

This project was developed during the Formação em Teste de Software e QA at [Iterasys](https://iterasys.com.br/) (class 147), as part of the initial learning of E2E test automation.

It focuses on understanding how Playwright works and how to structure basic automated tests.

---

## 🛠️ Tech Stack

* JavaScript
* Playwright
* BlazeDemo (flight booking demo web app)

---

## 🧠 Testing Approach

The tests are designed to cover:

* full user journey (E2E flow)
* UI interactions (forms, buttons, selections)
* functional validation of the booking process
* positive scenario (successful booking flow)

Two approaches were used:

* **Codegen-based test** → generated automatically using Playwright recorder
* **Manual scripting** → written manually to improve selector strategy and test structure

---

## ▶️ How to Run the Tests

```bash
npm install
npx playwright test
```

---

## 📌 Test Scenario

The main scenario covered:

1. Select origin and destination cities
2. Search available flights
3. Choose a flight
4. Fill purchase form
5. Complete booking
6. Validate confirmation message and price

---

## 🔄 Learning Progression

This project represents the **initial stage** of E2E test automation learning.

A more advanced version of this test, with improved architecture and design patterns, is available in:

[BlazeDemo147Adv](https://github.com/fernandamscabral/BlazeDemo147Adv)

---

## 📚 Notes

BlazeDemo is a demo application used for test practice and learning purposes.


