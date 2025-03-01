import GuestRouter from './GuestRoute'
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  ...GuestRouter,
]);

export default router;
