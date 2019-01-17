const routes = require('next-routes')

module.exports = routes()
  .add('home', '/', 'index')
  .add('about', '/about', 'about')
  .add('coffeetrip', '/coffee_trip', 'coffeetrip')
  .add('/coffee_trip/:id', 'coffeetripdetail')
  .add('/coffee_trip/:id/order', 'guestlistaddons')
  .add('shop', '/shop', 'shop')
  .add('/shop/:id/:slug', 'shopdetail')
  .add('blog', '/blog', 'blog')
  .add('/blog/:id/:slug', 'blogdetail')
  .add('howtoorder', '/howtoorder', 'howtoorder')
  .add('profile', '/profile', 'profile')
  .add('editprofile', '/profile/edit', 'editprofile')
  .add('review', '/review', 'review')
  .add('cart', '/cart', 'cart')
  .add('checkout', '/checkout', 'checkout')
  .add('/verify/:hash', 'emailconfirmation')