const CreateUser = async (payload) => {
  try {
    const response = await fetch("https://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You might need additional headers like authorization token
      },
      body: JSON.stringify(payload),
    });

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      const data = await response.json();
      return { status: response.status, data };
    } else {
      // If the request was not successful, handle the error
      const errorData = await response.json();
      return { status: response.status, errorData };
    }
  } catch (error) {
    // Handle any other errors that might occur during the request
    console.error("Error during createUser request:", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
