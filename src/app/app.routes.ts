import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'userDash',
    loadComponent: () => import('./pages/userDash/userDash.page').then((m) => m.UserDashPage),
  },
  {
    path: 'explore',
    loadComponent: () => import('./pages/explore/explore.page').then((m) => m.ExplorePage),
  },
  {
    path: 'map',
    loadComponent: () => import('./pages/map/map.page').then((m) => m.MapPage),
  },
  {
    path: 'tourist-spot',
    loadComponent: () => import('./pages/tourist-spot/tourist-spot.page').then((m) => m.TouristSpotPage),
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'suggest-spot',
    loadComponent: () => import('./pages/suggest-spot/suggest-spot.page').then((m) => m.SuggestSpotPage),
  },
  {
    path: 'my-submissions',
    loadComponent: () => import('./pages/my-submissions/my-submissions.page').then((m) => m.MySubmissionsPage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./admin/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'tourist-spots',
    loadComponent: () => import('./admin/tourist-spots/tourist-spots.page').then((m) => m.TouristSpotsPage),
  },
  {
    path: 'suggestions',
    loadComponent: () => import('./admin/suggestions/suggestions.page').then((m) => m.SuggestionsPage),
  },
  {
    path: 'users',
    loadComponent: () => import('./admin/users/users.page').then((m) => m.UsersPage),
  },
  {
    path: 'reviews',
    loadComponent: () => import('./admin/reviews/reviews.page').then((m) => m.ReviewsPage),
  },
  {
    path: 'announcements',
    loadComponent: () => import('./admin/announcements/announcements.page').then((m) => m.AnnouncementsPage),
  },
  {
    path: 'events',
    loadComponent: () => import('./admin/events/events.page').then((m) => m.EventsPage),
  },
];