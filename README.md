# Magic Math

A React & Nodejs application that calculates the magic value of a given number using the below formula:

```
magic_math(N) = magic_math(N−1) + magic_math(N−2) + N
```

The application is live at https://magic-math-calculator.vercel.app/

## Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js**: Download and install Node.js from the [official website](https://nodejs.org/). npm (Node Package Manager) is included with Node.js.

## Installation Instructions

Follow these steps to set up and run the application locally:

- **Clone the Repository**

    First, clone the repository on GitHub to your local machine using:

    ```bash
    git clone https://github.com/RajuKalidindi/magic-math.git
    ```

- **Backend Setup**

    1.  **Navigate into the Project Directory:**

        ```bash
        cd magic-math/backend
        ```

    2.  **Install Dependencies Install the required dependencies by running:**

        ```bash
        npm install
        ```

    3.  **Create and Set Environment Variable:**

        Create the following .env file in the root of the backend project:

        -   .env

        Set the PORT variable inside the .env:

        ```bash
        PORT=5000
        ```

    4.  **Running the Application:**

        To start the application, run the following command:

        ```bash
        npm run dev
        ```

        Magic Math API will start running on (http://127.0.0.1:5000). Navigate to this url to view your backend in action.

        _You can test the endpoint using the following command:_

        ```
        $ curl http://127.0.01:5000/api/{number}
        ```

        Replace `{number}` with the desired input value.

        For example, requesting the magic value for `4` will return:
        `{"result":14}`

- **Frontend Setup**

    1.  **Navigate into the Project Directory:**

        ```bash
        cd magic-math/frontend
        ```

    2.  **Install Dependencies Install the required dependencies by running:**

        ```bash
        npm install
        ```

    3.  **Create and Set Environment Variable:**

        Create the following .env file in the root of the backend project:

        -   .env

        Set the VITE_API_URL variable inside the .env:

        ```bash
        VITE_API_URL=http://127.0.0.1:5000/api
        ```

    4.  **Running the Application:**

        To start the application, run the following command:

        ```bash
        npm run dev
        ```

        React application will start running on http://localhost:5173/. Navigate to this url to view your frontend in action.

## Unit tests

1. **Backend tests**:

    Navigate to the `magic-math/backend` directory and execute the following command:

    ```
    npm test
    ```

    This will run all three API test cases, which should pass successfully.

2. **Frontend tests**:

    Navigate to the `magic-math/frontend` directory and execute:

    ```
    npm test
    ```

    \*Note: Ensure that the backend server is running before executing frontend tests. All four test cases should pass successfully.

    For test coverage report run:

    ```
    npm run coverage
    ```

## Design decisions

1. **API Endpoint Modification:** The endpoint was updated from /:n to /api/:n to ensure compatibility with Vercel's deployment requirements.

2. **Optimization of Magic Number Calculation:** I initially explored recursion for the magic number calculation but it was too inefficient for larger values and hence decided to use a loop based approach.

3. **Consideration of Caching:** While caching could have improved performance for larger values by storing previously computed results, it would also increase space complexity. For this use-case, I deemed it to be unnecessary.
