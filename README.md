# 👨‍🍳 Chef Gusteau

**Chef Gusteau** is a dynamic ReactJS application that leverages Mistral AI to generate personalized recipes based on user-provided ingredients. Inspired by the culinary genius of Chef Gusteau, this app aims to bring gourmet cooking to your fingertips.
🔗 **Live Demo**: [chef-guestau.netlify.app](https://chef-guestau.netlify.app)  


---

## 🚀 Features

* **Ingredient-Based Recipe Generation**: Input available ingredients, and Mistral AI will craft a unique recipe tailored to your selection.
* **Dynamic User Interface**: Responsive design ensures a seamless experience across devices.
* **State Management**: Efficient handling of user inputs and API responses using React's state management.
* **Form Handling**: User-friendly forms to input ingredients and receive recipes.

---

## 🛠️ Technologies Used

* **Frontend**: ReactJS
* **AI Integration**: Mistral AI API
* **Build Tool**: Vite
* **Styling**: Tailwind CSS
* **Linting**: ESLint

---

## 📦 Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/leantos/chef-gusteau.git
   cd chef-gusteau
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory and add your Mistral AI API key:

   ```env
   VITE_MISTRAL_API_KEY=your_mistral_api_key
   ```

4. **Run the Application**:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:5173`.

---

## 📁 Project Structure

```
chef-gusteau/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── IngredientForm.jsx
│   │   └── RecipeDisplay.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🤖 API Integration

The application communicates with the Mistral AI API to fetch recipe suggestions. Ensure you have a valid API key and have set it in the `.env` file as shown above.

---

## 🧑‍💻 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README further to suit your project's specifics.
