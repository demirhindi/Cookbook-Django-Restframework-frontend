import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DetailCardsView from '../views/DetailCardsView.vue'
import DetailPageView from '../views/DetailPageView.vue'
import RecipesView from '../views/RecipesView.vue'
import CreateMeal from '../views/CreateMeal.vue'
import CreateRecipe from '../views/CreateRecipe.vue'
import AddMeal from '../views/AddMeal.vue'
import AddRecipe from '../views/AddRecipe.vue'
import DeleteMeal from '../views/DeleteMeal.vue'
import DeleteRecipe from '../views/DeleteRecipe.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView,
    
  },

  {
    path: '/register',
    name: 'register',
    component: RegisterView

  },

  {
    path: '/detailcards/:slug',
    name: 'detailcards',
    component: DetailCardsView
  },

  {
    path: '/recipes/:slug',
    name: 'recipes',
    component: RecipesView
  },

  {
    path: '/detailpage/:slug',
    name: 'detailpage',
    component: DetailPageView
  },

  {
    path: '/createmeal',
    name: 'CreateMeal',
    component: CreateMeal
  },

  {
    path: '/createrecipe',
    name: 'CreateRecipe',
    component: CreateRecipe
  },
  {
    path: '/addmeal',
    name: 'AddMeal',
    component: AddMeal
  },

  {
    path: '/deletemeal',
    name: 'DeleteMeal',
    component: DeleteMeal
  },

  {
    path: '/addrecipe',
    name: 'AddRecipe',
    component: AddRecipe
  },

  {
    path: '/deleterecipe',
    name: 'DeleteRecipe',
    component: DeleteRecipe
  },

 



 

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
