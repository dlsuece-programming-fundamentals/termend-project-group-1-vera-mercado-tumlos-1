[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=23490791)
# LBYCPG3 Term End Project — Development of a Centralized Quote Generation System for Catering Services

**Group Members:** 
- Mercado, Charles Rodley
- Tumlos, Edouard Allan Paul
- Vera, Sarea Ohanna

## Abstract

Manual quotation processes in catering businesses often struggle to accommodate client requests especially when taking into account a client's dietary restrictions, allergies, and fluctuating guest counts. This project introduces a centralized quotation system designed to bridge the gap between standard service packages and highly customized event specifications. Unlike the usual e-commerce platforms, the system will intentionally exclude payment integration to facilitate the nature of catering business contracts which are negotiation heavy and open to differing prices.

The software prioritizes flexibility and high availability. It features a dual deployment model that supports both online access via a Cloudflare-tunneled Linux server in a Dell Wyse 5070 computer and offline local machine functionality. The system also integrates a public-facing homepage to boost business marketing and outreach. The success of the system was measured through multiple factors, the reduction in administrative overhead, the precision of the quotation invoice generated, and the streamlined communication between caterer and client. This automation will enable small catering businesses to scale operations while maintaining high standards of service customization.

The testing and evaluation of the system showed successful outcomes, resulting in functional, user-friendly, and professional web interface. A key technical achievement was the successful implementation of a Telegram bot that facilitates instant delivery of the generated PDF quotations to the business owner while simultaneously downloading the file for the user for easy reference via an Order ID. In summary, the system met all the objectives and requirements initially stated and proved to be a practical and highly efficient solution that successfully automated the inquiry and quotation phase as well as enhancing the caterer’s overall workflow.


## Introduction

Catering businesses often rely on manual processes to prepare quotations and service specifications for potential clients, particularly when requests differ from standard packages in terms of the number of guests, extra additions, dietary requirements, or allergy considerations. This project seeks to develop a centralized quotation system that enables clients to enter relevant information which will be gathered and used to generate quotations more efficiently.  Catering businesses rely on manual processes in order to prepare quotations and service specifications for potential clients. Additionally, customers often rely on the caterer to provide the pricing themselves as well as generate invoices and quotations. As such, there is a recurring need for a centralized quotation system that allows for variations while considering other specifications such as amount of attendees, specific dietary requirements and restrictions, and food preferences.

## Description of the Proposed System

The proposed system is created to provide a streamlined user interaction and improve overall efficiency by integrating a web platform that combines information access, customer inquiry, and quotation generation into a single interface. It focuses on usability and accessibility without compromising both functionality and looks. The system incorporates a structured quotation system that allows users to input specific entries and receive an initial quotation with no delay. Additionally, the inclusion of real-time communication through Telegram enhances responsiveness of the staff to provide both record and a manner of communication of customers. This design also coincides with scalability and maintainability, providing avenues for future improvements such as additional integrations or feature expansions without major restructuring. 


## Objectives

- To create a comprehensive catering quotation website that generate structured quotations immediately
- To create system that supports both online and offline functionality that allows the system to operate locally when needed.
- To create a quotation system that can send the generated quotation through Telegram

## Web Development Tools and Algorithms

Detail the different web development tools you used in the project (HTML, CSS, JavaScript, Bootstrap, etc.). Describe the algorithms you implemented and their significance in the development stages.

The  project would include HTML as the foundation of each page, the CSS to handle the styling and formatting of the website and the quote form that pops up after completion on filling out details, the Javascript to handle the functionalities such as calculating the overall total cost that includes taking into consideration the package chosen, any extra additions and VAT among other utilities, and a telegram bot configuration, itserves as the system's primary communication bridge, ensuring the caterer receives instant notifications of new quotes. Furthermore, the development tools that were utilized include a web browser to view changes and test the pages, a text editor (either Visual Studio Code or Neovim), Figma to create the baseline layout to be modified later, and Git to update the code as fast as possible.

<p align="center">
<img width="291" height="851" style="center" alt="image" src="https://github.com/user-attachments/assets/bc5f5d15-e01f-41f8-b61a-625ce1a56e5f" />
</p>

The figure above represents the submission algorithm which creates a PDF file to be sent to both the owner and downloaded by the customer. The PDF file contains the quotation information, alongside an order ID to have a reference when contacting the customer.

## Methodology

**A. Features**<br>
  The system will enable clients to enter event information and client details, along with the package of choice and any extras to go along with it. The client will be able to specify dietary requirements or allergy considerations for the business to take note of for the safety of their clients and the guests. All of which will be used to generate structured quotations efficiently. The system will support both online and offline functionality, allowing it to operate locally on a machine when needed. Additionally, the system will include a homepage that serves as both the main quotation interface and a platform for promoting the caterer’s services. 

**B. Constraints**<br>

  The following constraints were considered in the implementation of the project. While the system will generate quotations, the system would not include payment integration or process direct financial transactions since catering services typically involve negotiation before finalizing the arrangements for the event proper. It was instead focused on improving the quotation process. Additionally, it was developed in English, per the preferences of the intended users, and it was hosted locally on a Dell Wyse 5070 (Linux-based), with internet connectivity via a secure tunnel to Cloudflare. The system would generate documentation in accordance with BIR and DTI regulations to meet local regulatory requirements.


**C. Impact and Success Metrics**<br>
The main metric for evaluating the success of the project is whether it was able to provide ease of use for both users and catering business owners. It is expected to reduce the effort of invoice generation while also providing the limitations and suggestions that customers might need when acquiring from a catering service. With the centralization of the quote system, the catering business should be able to handle clients' needs more efficiently and allow more time for communication on matters such as financial negotiations and the finalization of the agreement between the two parties. 


## Testing and Evaluation of Results

### Results

**A. Home Page**
<img width="1707" height="877" alt="image" src="https://github.com/user-attachments/assets/5c9b8765-5f74-466b-923b-b94dcf5d642b" />
<p align="center">Main Header of Home Page</p>

<img width="1642" height="842" alt="image" src="https://github.com/user-attachments/assets/3dcb7ffe-1ec0-4779-b61d-ac2a32488c82" />
<p align="center">About Section of Home Page</p>

<img width="1625" height="873" alt="image" src="https://github.com/user-attachments/assets/0313d410-9f76-435d-9fe9-20ac8bcef8ff" />
<p align="center">Services Section of Home Page</p>

<img width="1577" height="873" alt="image" src="https://github.com/user-attachments/assets/fb569e13-494b-4fb3-aad8-3724bd1caf91" />
<p align="center">Home Page Footer</p>

**B. Quote Page**
<img width="1330" height="558" alt="image" src="https://github.com/user-attachments/assets/0f915383-c18f-4f23-af9a-a52e6846eeb3" />
<p align="center">Main Header of Quote Page</p> 

<p align="center">
<img width="862" height="636" alt="image" src="https://github.com/user-attachments/assets/d67aaa16-7f90-4c1d-ad2a-2d088681b98b" />
</p><p align="center">Event Information Details Box</p>

<p align="center">
<img width="876" height="342" alt="image" src="https://github.com/user-attachments/assets/9b63369c-baa7-4242-ae6a-5d9ba70828eb" />
</p><p align="center">Contact Information Details Box</p>

<p align="center">
<img width="870" height="737" alt="image" src="https://github.com/user-attachments/assets/e3b0e365-8216-4f07-a862-07467b0cd4d6" />
</p><p align="center">Default Package Selection and Extras Box</p>

<p align="center">
<img width="693" height="863" alt="image" src="https://github.com/user-attachments/assets/d4f095ba-e04f-4c72-925c-468b250c86d7" />
</p><p align="center">Selected Package Selection and Extras Box</p>

<p align="center">
<img width="697" height="598" alt="image" src="https://github.com/user-attachments/assets/3ba2bb5d-5f7c-4805-bea4-d50f2c828700" />
</p><p align="center">Special Requests and Dietary Information Box</p>

<p align="center">
<img width="466" height="647" alt="image" src="https://github.com/user-attachments/assets/a606b94c-ebcb-482e-ac1d-cdb1932a2fa0" />
</p><p align="center">Quote Summary Box</p>

<p align="center">
<img width="455" height="595" alt="image" src="https://github.com/user-attachments/assets/dd2a1240-e6c8-40ca-ae85-ba74d142aa65" />
</p><p align="center">Main Quotation Page</p>

<p align="center">
<img width="347" height="535" alt="image" src="https://github.com/user-attachments/assets/798fb8bb-1035-4f38-ade1-f856bbb0591a" />
</p><p align="center">Submission of Quote Successful</p>

<p align="center">
<img width="348" height="446" alt="image" src="https://github.com/user-attachments/assets/208a702b-9f3c-4a98-98d9-e57edd9b360a" />
</p><p align="center">Generated PDF of the Quote</p>

**C. Quote Generation Bot**<br>
<p align="center">
<img width="397" height="444" alt="image" src="https://github.com/user-attachments/assets/4c2f7608-d674-4e25-83ad-c8b88b79045d" />
</p><p align="center">Quote Details and Quote PDF Delivered to Telegram</p>

### Discussion<br>
The page itself is intended to be simple, providing ease of access for the users while also being professional which attracts customers. The homepage provides a welcoming feeling, and concise details with regards to the services. The contact information is included in the webpage as well. As for the quotation page, it is created with customers in mind, providing multitudes of options without compromising on actual functionality. Though the proposed Messenger integration was not achieved, Telegram was utilized instead due to proper documentation and ease of access.

### Conclusion<br>
The website was successfully developed in accordance with the client’s specifications, meeting both functional and design requirements while providing a user-friendly interface, clear presentation of information, and effective communication features, and despite minor adjustments during development such as the shift from Messenger to Telegram integration, the final product remains aligned with the project’s objectives and serves as a practical and efficient solution for both the client and its users.

## References<br>

1. Powell, T. A. (2010). HTML & CSS: The complete reference. McGraw-Hill.
2. Flanagan, D. (2020). JavaScript: The definitive guide. O’Reilly. 
3. Bots: An introduction for developers. Telegram APIs. (n.d.). https://core.telegram.org/bots


## Project Deliverables

Check off each item as you complete it:

- [x] **Project Documentation** — this README or uploaded document following the format above
- [x] **App Design** — Figma link submitted on Canvas
- [x] **Source Code** — all HTML, CSS, JS, and assets in `src/`
- [x] **Video Walkthrough** — max 5 minutes, link below
- [x] **Peer Grade** — individual submission on Canvas

## Video Walkthrough

Paste your video link here:
https://drive.google.com/file/d/1-pIDbi0koSsEYz3q62G5rUhP_WN4HuD-/view?usp=drive_link

## How to Run

```
# Example:
# 1. Open catering-home.html in a browser
# 2. Or utilize VS Code and use the live server extension to open the html file
```

## Project Structure

```
├── src/
│   ├── catering-quote.html
│   ├── catering-home.html
│   ├── css/
│   │   └── catering-quote.css
│   │   └── catering-home.css
│   ├── js/
│   │   └── catering_quote.js
│   │   └── catering-home.css
│   ├── assets/
│   │   └── catering-cover.png
│   │   └── catering-logo.png
├── docs/
└── README.md
```

## Submission Notes

- All source code must be committed and pushed before the deadline (**April 9, 2359**).
- Do **not** upload generated or binary files.
- Keep your repository organized — use folders as shown above.
- All team members should contribute commits.
