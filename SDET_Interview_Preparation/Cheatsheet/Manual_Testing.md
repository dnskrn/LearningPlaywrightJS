# Software Testing FAQs  

## 1. What is the difference between verification and validation?  
- **Verification**: Ensures the product is built correctly (meets design specifications).  
- **Validation**: Ensures the product meets user needs and requirements.  

---

## 2. What is the difference between severity and priority?  
- **Severity**: Impact of a defect on the system.  
- **Priority**: Urgency to fix the defect.  

---

## 3. What are the different levels of testing?  
- Unit Testing  
- Integration Testing  
- System Testing  
- Acceptance Testing  

---

## 4. What is the STLC (Software Testing Life Cycle)?  
1. Requirement Analysis  
2. Test Planning  
3. Test Case Development  
4. Environment Setup  
5. Test Execution  
6. Test Cycle Closure  

---

## 5. What is regression testing and when do you do it?  
- Testing to ensure new changes don’t break existing functionality.  
- Done after code changes, bug fixes, or enhancements.  

---

## 6. What is re-testing? How is it different from regression?  
- **Re-testing**: Verifying a specific defect is fixed.  
- **Regression**: Ensuring no new defects are introduced.  

---

## 7. What is a test case? What should it include?  
- A set of conditions to validate functionality.  
- Includes: Test ID, Description, Steps, Expected Result, Actual Result, Status.  

---

## 8. What is a test scenario? How do you write one?  
- High-level description of functionality to test.  
- Example: "Verify login functionality with valid credentials."  

---

## 9. What is boundary value analysis? Give real example.  
- Testing at boundary limits.  
- Example: For input range 1–100, test 0, 1, 100, 101.  

---

## 10. What is equivalence partitioning? Give example.  
- Dividing input data into valid/invalid partitions.  
- Example: For age input (18–60), test 17, 18, 30, 60, 61.  

---

## 11. What is the difference between smoke and sanity testing?  
- **Smoke**: Basic tests to check system stability.  
- **Sanity**: Focused tests to verify specific functionality.  

---

## 12. What is a bug life cycle? Explain with statuses.  
1. New  
2. Assigned  
3. Open  
4. Fixed  
5. Retested  
6. Closed / Reopened  

---

## 13. What is the role of a QA in Agile?  
- Collaborate with the team.  
- Write test cases during sprints.  
- Perform continuous testing and provide feedback.  

---

## 14. What is exploratory testing? When do you use it?  
- Unscripted testing to explore the application.  
- Used when requirements are unclear or time is limited.  

---

## 15. What is the difference between functional and non-functional testing?  
- **Functional**: Validates features and functionality.  
- **Non-functional**: Validates performance, usability, etc.  

---

## 16. How do you decide when to stop testing?  
- Based on test coverage, deadlines, and risk assessment.  

---

## 17. What is a traceability matrix? Why is it important?  
- Maps requirements to test cases.  
- Ensures all requirements are tested.  

---

## 18. How do you prioritize test cases in limited time?  
- Focus on critical functionality, high-risk areas, and frequently used features.  

---

## 19. What are negative test cases? Give 3 examples.  
- Testing invalid inputs or unexpected scenarios.  
    1. Entering letters in a numeric field.  
    2. Submitting a form without required fields.  
    3. Logging in with incorrect credentials.  

---

## 20. What is the difference between test plan and test strategy?  
- **Test Plan**: Document detailing testing scope, approach, and schedule.  
- **Test Strategy**: High-level document outlining testing objectives and methods.


# Common QA Questions and Answers  

---

## 21. A login page accepts blank username but still logs in. How will you report it?  
- Report it as a **high-priority bug** with steps to reproduce, expected behavior (should not allow blank username), and actual behavior (logs in with blank username).  

---

## 22. Your developer rejects a bug saying “works on my system.” How will you respond?  
- Provide detailed steps to reproduce the issue, including environment details, logs, and screenshots. If needed, reproduce the issue in a shared environment.  

---

## 23. During UAT, client reports an issue that you didn’t catch in QA. What do you do?  
- Acknowledge the issue, analyze why it was missed, and fix it promptly. Update test cases to prevent similar misses in the future.  

---

## 24. You found a blocker bug just before sprint demo. What’s your action?  
- Immediately inform the team, prioritize fixing the bug, and communicate the impact to stakeholders. If unresolved, discuss alternatives for the demo.  

---

## 25. What will you test in an e-commerce checkout flow?  
- Test scenarios include:  
    - Adding/removing items from the cart.  
    - Applying coupons/discounts.  
    - Payment gateway integration.  
    - Address validation.  
    - Order confirmation and email notifications.  

---

## 26. You missed a critical defect in production. How do you explain?  
- Conduct a root cause analysis, explain the findings transparently, and implement corrective actions like updating test cases or improving processes.  

---

## 27. How do you test a dropdown with dynamic data from DB?  
- Verify:  
    - Data is fetched correctly from the database.  
    - Dropdown updates dynamically based on conditions.  
    - Boundary cases (e.g., no data, large data).  

---

## 28. How will you test a search bar that filters results in real-time?  
- Test scenarios include:  
    - Typing partial/full keywords.  
    - Case sensitivity.  
    - Special characters.  
    - Performance with large datasets.  

---

## 29. How do you write test cases for an OTP feature?  
- Test cases include:  
    - OTP generation and expiration.  
    - Valid/invalid OTP entry.  
    - Resend OTP functionality.  
    - Security aspects (e.g., OTP reuse).  
---

## 30. How do you handle situations where requirements keep changing?  
- Use agile practices like maintaining a flexible test plan, prioritizing tasks, and collaborating closely with stakeholders to adapt to changes.  

---

## 31. You find 20 issues on the first day of testing. What’s your approach?  
- Prioritize the issues based on severity and impact. Communicate critical bugs immediately and plan to address the rest systematically.  

---

## 32. How do you test a "Remember Me" checkbox?  
- Verify:  
    - User stays logged in across sessions when checked.  
    - User is logged out after session expiry when unchecked.  
    - Security aspects (e.g., no sensitive data stored in plain text).  

---

## 33. What is your approach to cross-browser testing manually?  
- Test key functionalities across supported browsers and versions. Focus on layout, performance, and compatibility issues.  

---

## 34. How do you test if logout works properly across multiple tabs?  
- Log in on multiple tabs, log out from one tab, and verify all tabs are logged out.  

---

## 35. Write test cases for a file upload feature.  
- Test cases include:  
    - Supported/unsupported file types.  
    - File size limits.  
    - Upload progress and error handling.  
    - Security checks (e.g., virus scanning).  

---

## 36. How do you test the pagination feature?  
- Verify:  
    - Navigation between pages.  
    - Boundary conditions (e.g., first/last page).  
    - Consistency of data across pages.  

---

## 37. Explain a situation where you found a critical bug in UAT.  
- Share a specific example, focusing on how you identified the bug, communicated it, and ensured it was resolved before release.  

---

## 38. How do you handle conflict with a developer about a bug?  
- Stay professional, provide evidence (logs, screenshots), and discuss the issue collaboratively to reach a resolution.  

---

## 39. How do you test an API response manually?  
- Use tools like Postman to:  
    - Send requests with valid/invalid data.  
    - Verify response codes, headers, and payloads.  
    - Test edge cases and error handling.  

---

## 40. What’s your checklist before giving sign-off for release?  
- Ensure:  
    - All critical bugs are resolved.  
    - Test cases are executed and passed.  
    - Regression testing is complete.  
    - Release notes and documentation are ready.  

---

