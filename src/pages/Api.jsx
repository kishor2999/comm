// ProductService.js
// Service for fetching product data and images from the backend

import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';
const API_KEY = process.env.REACT_APP_API_KEY;

// Function to fetch product data from the backend
export async function fetchProductData(productId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
}

// Function to fetch product image from the backend
export async function fetchProductImage(productId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}/image`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.imageUrl;
  } catch (error) {
    console.error('Error fetching product image:', error);
    throw error;
  }
}

// CartService.js
// Service for managing the shopping cart

// Function to add items to the cart
export async function addToCart(productId, quantity) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/cart/add`,
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
}

// Function to fetch product price from the backend
export async function fetchProductPrice(productId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}/price`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.price;
  } catch (error) {
    console.error('Error fetching product price:', error);
    throw error;
  }
}
