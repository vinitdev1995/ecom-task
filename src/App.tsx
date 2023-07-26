// Main App.js file which load first, it'll manage entire Application routing with lazy loading

import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, } from 'react-toastify';
import { Box } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() =>
  import('./pages/Home')
);

const Products = lazy(() =>
  import('./pages/Products')
);

const ProductDetails = lazy(() =>
  import('./pages/ProductDetails')
);

function App() {
  return (
    <Box sx={{ display: 'flex', "& .MuiTypography-root, .MuiButton-root": { fontFamily: 'Poppins' } }} >
      <Suspense fallback={null}>
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />

          {/* Product Listing Routes */}
          <Route path="/products" element={<Products />} />

          {/* Product Details Routes */}
          <Route path="/product-details/:id" element={<ProductDetails />} />

          <Route path="*" element={<Products />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </Box>
  );
}

export default App;
