import axios from "axios"

const URL = 'http://localhost:3013/'

const instanceProducts = axios.create({
   baseURL: URL + 'products'
})

const instanceCategories = axios.create({
   baseURL: URL + 'categories'
})

const instanceBrands = axios.create({
   baseURL: URL + 'brands'
})

const instanceUsers = axios.create({
   baseURL: URL + 'users'
})

export const apiGetProducts = () => {
   return instanceProducts.get().then(responce => responce.data)
}

export const apiGetProductsActive = (activeCategory) => {
   return instanceProducts.get('?category_id=' + activeCategory).then(responce => responce.data)
}

export const apiGetProductsParts = (activeCategory, currentPage, sizePage) => {
   return instanceProducts.get(`?category_id=${activeCategory}&_page=${currentPage}&_limit=${sizePage}`)
      .then(responce => responce.data)
}

export const apiGetCategories = () => {
   return instanceCategories.get().then(responce => responce.data)
}

export const apiGetBrands = () => {
   return instanceBrands.get().then(responce => responce.data)
}

export const apiGetUsers = () => {
   return instanceUsers.get().then(responce => responce.data)
}

export const apiGetUsersParts = (currentPage, sizePage) => {
   return instanceUsers.get(`?_page=${currentPage}&_limit=${sizePage}`)
      .then(responce => responce.data)
}