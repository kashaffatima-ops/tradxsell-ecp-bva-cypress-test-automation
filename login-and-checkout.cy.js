//Login
// // describe("template spec", () => {
// //   it("passes", () => {
// //     cy.visit("http://localhost:3000/");
// //   });
// // });
// describe("Login Functionality Test", () => {
//   // Before each test, visit the login page
//   it("displays an error message for invalid credentials", () => {
//     cy.visit("http://localhost:3000/loginpage"); // Adjust URL if needed
//     cy.get('input[placeholder="Enter email"]').should("be.visible").type("invalid@example.com");
//     cy.get('input[placeholder="Enter password"]').should("be.visible").type("wrongpassword");
//     cy.get("form > button").should("be.visible").click();

//     // Wait for error message to appear
//     cy.contains("Invalid email or password. Please try again.", { timeout: 10000 }).should("be.visible");
//   });
// });

// describe("Add to Cart and Conditional Checkout", () => {
//   it("handles login redirection and completes checkout", () => {
//     // Step 1: Log in
//     cy.visit("http://localhost:3000/loginpage");
//     cy.get('input[placeholder="Enter email"]').should("be.visible").type("amna123@gmail.com");
//     cy.get('input[placeholder="Enter password"]').should("be.visible").type("1234");
//     cy.get("form > button").should("be.visible").click();

//     // Step 2: Add a product to the cart
//     // cy.visit("http://localhost:3000/"); // Adjust URL if needed
//     // cy.get(":nth-child(1) > .product-details > .btn").click();


//     cy.url().then((currentUrl) => {
//       if (currentUrl.includes("http://localhost:3000/")) {
//         cy.get(":nth-child(1) > .product-details > .btn").click();
//         cy.url().then((currentUrl)=>{
//           if (currentUrl.includes("http://localhost:3000/products/6")) {
//             cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > button').click();
//              // Verify the "Cart" link is visible
//     cy.get('a').contains("CART").should("be.visible");

//     // Click on the "Cart" link
//     cy.get('a').contains("CART").click();
//     cy.get('.btn').click();
//     cy.url().then((currentUrl)=>{
//           if (currentUrl.includes("http://localhost:3000/products/6")) {
//             cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > button').click();
//              // Verify the "Cart" link is visible
//     cy.get('a').contains("CART").should("be.visible");

//     // Click on the "Cart" link
//     cy.get('a').contains("CART").click();
//     cy.get('.btn').click();
//     cy.url().should("include", "GET 200 /checkout");
//     cy.get('.btn').contains("Place Order").click();
//     cy.url().should("include", "/order");
  

//             // cy.url().then((currentUrl) => {
//             //   if (currentUrl.includes("http://localhost:3000/loginpage")) {
//             //     cy.get('input[placeholder="Enter email"]').should("be.visible").type("amna123@gmail.com");
//             //     cy.get('input[placeholder="Enter password"]').should("be.visible").type("1234");
//             //     cy.get("form > button").should("be.visible").click(); 
//             //   }
//             // });
//           }
//         })
//             // cy.url().then((currentUrl) => {
//             //   if (currentUrl.includes("http://localhost:3000/loginpage")) {
//             //     cy.get('input[placeholder="Enter email"]').should("be.visible").type("amna123@gmail.com");
//             //     cy.get('input[placeholder="Enter password"]').should("be.visible").type("1234");
//             //     cy.get("form > button").should("be.visible").click(); 
//             //   }
//             // });
//           }
//         })
//       }
//     });

//     // cy.url().then((currentUrl) => {
//     //   if (currentUrl.includes("http://localhost:3000/products/6")) {
//     //     cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > button').click();
//     //     cy.visit("http://localhost:3000/cart")
//     //     cy.url().then((currentUrl) => {
//     //       if (currentUrl.includes("http://localhost:3000/loginpage")) {
//     //         cy.get('input[placeholder="Enter email"]').should("be.visible").type("amna123@gmail.com");
//     //         cy.get('input[placeholder="Enter password"]').should("be.visible").type("1234");
//     //         cy.get("form > button").should("be.visible").click(); 
//     //       }
//     //     });
//     //   }
//     // });
//   });
// });

