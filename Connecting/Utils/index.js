import React, { useState } from "react";
import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

function extractImageUrls(imageArray) {
  return imageArray.map((image) => image.url);
}

///REGISTER_USER
export const REGISTER_USER = async (signUp) => {
  const { name, email, password, confirmPassward } = signUp;
  if (!name || !email || !password || !confirmPassward)
    return "Data is missing";
  if (password != confirmPassward) return "Password in not matching";

  const response = await axios({
    method: "POST",
    url: "/api/auth/register",
    withCredentials: true,
    data: {
      username: name,
      email: email,
      password: password,
      confirmPassward: confirmPassward,
    },
  });
  if (response.status == 201) {
    console.log(response);
    const res = await axios({
      method: "POST",
      url: "/api/auth/login",
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    });
    if (res.status == 200) {
      window.location.href = "/";
    }
  }
};

//LOGIN_USER
export const LOGIN_USER = async (login) => {
  const { email, password } = login;

  if (!email || !password) return "Data is missing";

  const response = await axios({
    method: "POST",
    url: "/api/auth/login",
    withCredentials: true,
    data: {
      email: email,
      password: password,
    },
  });
  if (response.status == 200) {
    window.location.href = "/";
  }
};

//LOGOUT
export const LOGOUT = async () => {
  const res = await axios({
    method: "GET",
    url: `/api/auth/logout`,
    withCredentials: true,
  });

  if (res.status === 200) {
    console.log("LOGOUT");

    window.location.href = "/login";
  }
};

///CHECK_AUTH
export const CHECK_AUTH = async () => {
  const res = await axios({
    method: "GET",
    url: "/api/auth/refetch",
    withCredentials: true,
  });
  let user;
  if (res.status === 200) {
    user = res.data;
  }
  return user;
};

///LIKE_POST
export const LIKE_POST = async (postID) => {
  const currentUser = await CHECK_AUTH();

  const res = await axios({
    method: "POST",
    url: `/api/post/like/${postID}`,
    withCredentials: true,
    data: {
      userId: currentUser._id,
    },
  });

  if (res.status === 200) {
    return res;
  }
};

///DISLIKE_POST
export const DISLIKE_POST = async (postID) => {
  const currentUser = await CHECK_AUTH();

  const res = await axios({
    method: "POST",
    url: `/api/post/dislike/${postID}`,
    withCredentials: true,
    data: {
      userId: currentUser._id,
    },
  });

  if (res.status === 200) {
    return res;
  }
};

///AI V3
export const IMAGE_GENERATOR_V3 = async (promptV3) => {
  const currentUser = await CHECK_AUTH();

  const { prompt, negativePrompt, size, style } = promptV3;

  console.log(prompt, negativePrompt, size, style);

  if (!prompt || !negativePrompt || !size || !style) {
    return "Data Missing";
  }
  const LOWERCASE = style.toLowerCase();

  const AIImage = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    size: size,
    quality: "hd",
    n: 1,
    style: LOWERCASE,
  });

  console.log(AIImage);

  if (AIImage.data[0].url) {
    const response = await axios({
      method: "POST",
      url: `/api/post/create/v3/${currentUser._id}`,
      withCredentials: true,
      data: {
        prompt,
        negativePrompt: negativePrompt,
        revisedPrompt: AIImage.data[0].revised_prompt,
        size,
        style,
        imageURL: AIImage.data[0].url,
      },
    });

    console.log("V3 - ", response)
    if (response.status == 201) {
      const credit = await axios({
        method: "PUT",
        url: `/api/user/credit/${currentUser._id}`,
        withCredentials: true,
        data: {
          credit: Number(currentUser?.credit) - 1,
        },
      });
      return response;
    }
  }
};

///AI V2
export const IMAGE_GENERATOR_V2 = async (promptV2) => {
  const currentUser = await CHECK_AUTH();

  const { prompt, negativePrompt, size, n } = promptV2;
  if (!prompt || !negativePrompt || !size || !n) {
    return "Data Missing";
  }

  const AIImage = await openai.images.generate({
    model: "dall-e-2",
    prompt: prompt,
    size: size,
    n: Number(n),
  });

  const imageUrls = extractImageUrls(AIImage.data);

  if (imageUrls.length) {
    const response = await axios({
      method: "POST",
      url: `/api/post/create/v2/${currentUser._id}`,
      withCredentials: true,
      data: {
        prompt,
        negativePrompt: negativePrompt,
        size,
        n,
        imageUrls: imageUrls,
      },
    });
    if (response.status == 201) {
      const credit = await axios({
        method: "PUT",
        url: `/api/user/credit/${currentUser._id}`,
        withCredentials: true,
        data: {
          credit: Number(currentUser?.credit) - 1,
        },
      });
      return response;
      return response;
    }
  }
};

//GET ALL POSTS
export const GET_AI_IMAGES = async () => {
  const response = await axios({
    method: "GET",
    url: `/api/post/all`,
  });
  if (response.status == 200) {
    return response.data.posts;
  }
};

//GET ALL USER POST
export const GET_USER_AI_IMAGES = async (userId) => {
  const response = await axios({
    method: "GET",
    url: `/api/post/user/${userId}`,
  });
  if (response.status == 200) {
    return response.data.posts;
  }
};

//GET SINGLE POSTS
export const GET_SINGLE_POST = async (postId) => {
  const response = await axios({
    method: "GET",
    url: `/api/post/single/${postId}`,
  });
  if (response.status == 200) {
    return response.data.returnPost;
  }
};
//DELETE POSTS
export const DELETE_POST = async (postId) => {
  const response = await axios({
    method: "DELETE",
    url: `/api/post/delete/${postId}`,
  });
  if (response.status == 200) {
    return response;
  }
};

//BUYING CREDIT
export const BUYING_CREDIT = async (CREDIT) => {
  const currentUser = await CHECK_AUTH();

  const credit = await axios({
    method: "PUT",
    url: `/api/user/credit/${currentUser._id}`,
    withCredentials: true,
    data: {
      credit: Number(currentUser?.credit) + Number(CREDIT),
    },
  });
  if (credit.status == 200) {
    return credit;
  }
};
