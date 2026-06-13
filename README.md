# TradXSell Testing Project – Cypress Automation, ECP/BVA & Defect Analysis

## Overview

This repository contains a comprehensive Software Quality Assurance (SQA) project conducted on the **TradXSell E-Commerce Application**. The project demonstrates the application of software testing techniques including Equivalence Class Partitioning (ECP), Boundary Value Analysis (BVA), automated end-to-end testing using Cypress, and defect reporting.

The primary objective was to evaluate the application's functionality, validate critical business workflows, identify defects, and provide recommendations for improving software quality, reliability, and user experience.

Project TradXSell code link: https://github.com/Bilal-khan980/TradXSell.git

## Project Scope

The testing activities covered the following modules:

* User Registration
* User Login
* Product Search & Browsing
* Add Product to Cart
* Cart Management
* Checkout & Order Placement
* User Profile Management
* Product Reviews
* Admin Product Management
* Admin Order Management

## Testing Techniques Applied

### Equivalence Class Partitioning (ECP)

Test scenarios were designed using valid and invalid input partitions for:

* Username Validation
* Email Validation
* Password Validation
* Phone Number Validation
* Address Validation
* Product Information Validation
* Review Submission Validation

### Boundary Value Analysis (BVA)

Boundary conditions were tested for:

* Username Length Limits
* Password Length Requirements
* Phone Number Length Validation
* Product Quantity Limits
* Product ID Constraints
* Address Length Validation
* Input Field Character Limits

### Automated Testing

End-to-end test scenarios were automated using Cypress to validate:

* Login Functionality
* Product Purchase Flow
* Cart Operations
* Review Submission
* Seller Product Management
* Checkout Process

## Tools Used

* **Cypress** – End-to-End Test Automation
* **JavaScript** – Test Script Development
* **Equivalence Class Partitioning (ECP)**
* **Boundary Value Analysis (BVA)**
* **Git & GitHub** – Version Control
* **Markdown Documentation**

## Test Coverage

The testing activities included:

* Functional Testing
* Validation Testing
* Positive Testing
* Negative Testing
* Boundary Value Testing
* Equivalence Partitioning Testing
* End-to-End Workflow Testing
* UI Validation Testing
* Defect Verification

## Automated Test Scenarios

### Login & Checkout

* Invalid login validation
* User authentication
* Add product to cart
* Checkout process
* Order placement validation

### Place Order Successfully

* User login
* Product selection
* Cart navigation
* Checkout completion
* Successful order placement

### Seller Product Management

* Seller registration
* Seller login
* Product creation
* Product information validation
* Product listing verification

### Cart & Review Management

* Product review submission
* Cart item removal
* Product detail validation

## Defect Analysis

The project identified and documented multiple defects including:

* Invalid username validation issues
* Invalid email acceptance
* Invalid phone number acceptance
* Invalid address validation
* Missing profile field validation
* Product synchronization issues between customer and admin panels
* Order synchronization failures
* Product review synchronization issues
* Product ID validation defects
* Runtime errors during product creation
* Cart item removal failures
* Missing product images in cart
* Order display inconsistencies

Each defect includes:

* Defect ID
* Description
* Severity & Priority
* Steps to Reproduce
* Expected Result
* Actual Result
* Impact Analysis

## Deliverables

### Cypress Automation Suite

Automated test scripts for:

* Login Validation
* Checkout Flow
* Product Management
* Cart Management
* Review Submission

### ECP & BVA Documentation

Comprehensive test design documentation including:

* Valid Partitions
* Invalid Partitions
* Boundary Conditions
* Test Data Design

### Defect Reports

Detailed bug reports containing:

* Reproduction Steps
* Severity Classification
* Screenshots & Evidence
* Expected vs Actual Results

## Key Skills Demonstrated

* Software Testing
* Quality Assurance
* Cypress Automation
* Test Case Design
* Equivalence Class Partitioning (ECP)
* Boundary Value Analysis (BVA)
* Functional Testing
* Defect Reporting
* Defect Analysis
* Bug Documentation
* Test Automation
* Requirement Validation
* QA Documentation

## Project Outcome

The testing process successfully identified multiple critical, high, and medium-severity defects affecting application functionality, validation mechanisms, data consistency, and user experience. The findings provide valuable insights for improving system reliability and software quality.

## Learning Outcomes

Through this project, I gained practical experience in:

* Designing test cases using ECP and BVA techniques
* Developing automated tests using Cypress
* Executing end-to-end testing workflows
* Identifying and documenting software defects
* Performing defect analysis and reporting
* Preparing professional QA documentation
* Applying Software Testing Life Cycle (STLC) practices
* Testing real-world e-commerce application workflows

## Author

**Kashaf Fatima**

Software Quality Assurance (SQA) Engineer | QA Automation Enthusiast

---

*This repository was created as part of a Software Quality Assurance portfolio project to demonstrate practical testing techniques, Cypress automation, defect reporting, and software quality assessment on a real-world e-commerce application.*
