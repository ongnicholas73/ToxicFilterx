const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      name: "YourOpiOnRoblox",
      type: "input",
      message: "What is your opinion on Roblox?",
    },
    {
      name: "LikePizzaPep",
      type: "confirm",
      message: "Do you like Pizza?",
    },
    {
      name: "WhatAge",
      type: "number",
      message: "What is your age?",
    },
    {
      name: "FavoriteVideoGame",
      type: "input",
      message: "What is your favorite video game?",
    },
    {
      name: "Pass",
      type: "password",
      message: "Type in your password.",
    },
    {
      name: "WhatToppingsPizza",
      type: "input",
      message: "What is your favorite toppings on pizza?",
    },
    {
      name: "FavorColor",
      type: "list",
      message: "What is your favorite color?",
      choices: ["red", "orange", "yellow", "green", "blue", "purple"],
    },
  ])
  .then((answers) => {
    console.log(answers);

    const template = `
# What is your opinion on Roblox?

${answers.YourOpiOnRoblox}

# Do you like Pizza?

${answers.LikePizzaPep}

# What is your age?

${answers.WhatAge}

# What is your favorite video game?

${answers.FavoriteVideoGame}

# Type in your password.

${answers.Pass}

# What is your favorite toppings on pizza?

${answers.WhatToppingsPizza}

# What is your favorite color?

${answers.FavorColor}
`;

    fs.writeFile("README.md", template, "utf8", () => {
      console.log("yay nick ong did it");
    });
  });
