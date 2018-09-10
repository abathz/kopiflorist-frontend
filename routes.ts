import Routes from 'next-routes'

const routes = new Routes()

routes
  .add('home', '/', 'index')
  .add('about', '/about', 'about')
  .add('coffeetrip', '/coffee_trip', 'coffeetrip')
  .add('/coffee_trip/:id', 'coffeetripdetail')
  .add('shop', '/shop', 'shop')
  .add('/shop/:id', 'shopdetail')
  .add('blog', '/blog', 'blog')
  .add('/blog/:id', 'blogdetail')
  .add('howtoorder','/howtoorder', 'howtoorder')

export default routes
export const Link = routes.Link
export const Router = routes.Router
