/* eslint-disable no-console */
import qs from 'qs';
import get from 'lodash/get';
import isFinite from 'lodash/isFinite';
import products from '../data/products.json';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const apiCall = async (subURL, params) => {
  const stringifyParams = qs.stringify(params);

  try {
    const response = await fetch(`${URL}/${subURL}${params ? '?' : ''}${stringifyParams}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error(error);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  }

  return null;
};

// ----------- EDUCATION ARTICLES -----------
export const getEducationArticles = async () => {
  const params = {
    populate: '*',
  };
  const json = await apiCall('education-articles', params);
  const data = get(json, 'data') || [];
  return data;
};

export const getEducationArticle = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`education-articles/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};

// ----------- IDEAS -----------
export const getIdeas = async () => {
  const params = {
    populate: '*',
  };
  const json = await apiCall('ideas', params);
  const data = get(json, 'data') || [];
  return data;
};

export const getIdea = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`ideas/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};

// ----------- PRESS -----------
export const getPress = async () => {
  const params = {
    sort: ['datePublished:desc'],
    populate: '*',
  };
  const json = await apiCall('media-appearances', params);
  const data = get(json, 'data') || [];
  return data;
};

export const getEachPress = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`media-appearances/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};

// ----------- BLOGS -----------
export const getBlogs = async () => {
  const params = {
    sort: ['datePublished:desc'],
    populate: '*',
    // fetches max of 1000 blogs on the homepage
    'pagination[limit]': 1000,
  };
  const json = await apiCall('blog-posts', params);
  const data = get(json, 'data') || [];
  return data;
};

// ----------- PRODUCTS -----------
export const getProducts = async () => products;

/**
 * `Blog` should be able to return a response if queried with `id` or `slug`.
 * If `filters` query is used, the response will be an array hence return the 1st element fetched
 *
 * @example
 * /blog/1
 * /blog/blog-one
 *
 */

export const isIdUsedToFetchBlog = id => !!(isFinite(Number(id)));

export const getBlog = async id => {
  const params = { populate: '*' };

  if ((isIdUsedToFetchBlog(id))) {
    const json = await apiCall(`blog-posts/${id}`, params);
    return get(json, 'data') || null;
  }

  // id is `slug` here
  const slugParams = { ...params, 'filters[slug][$eq]': id };
  const json = await apiCall('blog-posts', slugParams);
  return get(json, 'data[0]') || null;
};

// ----------- FUNNELS -----------
export const getFunnel = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`funnels/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};
