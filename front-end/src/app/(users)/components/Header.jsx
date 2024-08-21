  "use client";
  import Link from "next/link";
  import Banner from "./Banner.js";
  import { useSelector } from "react-redux";
  import { useDispatch } from 'react-redux';
  import {logout} from "../../../redux/slices/authSlice"
  import Category from "../category/page.jsx";
  import { useRouter } from 'next/navigation';

  const Header = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch()
 const router = useRouter()

    const handleLogout = () => {
        dispatch(logout());
        router.push('/');
    };
  const cartItems = useSelector(state => state.cart.items) || [];
  // console.log(user);
  const uniqueProductIds = new Set(cartItems.map(item => item._id));

// Đếm số lượng các sản phẩm duy nhất
const cartCount = uniqueProductIds.size;

     
  return (
    <div>
      <header class="position-relative bg-white border ">
        <div class="bg-black d-none d-sm-block">
          <div class="container text-white">
            <div class="row">
              <div class="col-md-6 pt-3">
                <p class="text-white fs-8">
                  <img
                    src="https://file.hstatic.net/1000402464/file/output-onlinegiftools_9bbbf15c266044699bca3a5635e05246.gif"
                    width="30px"
                    alt=""
                  />{" "}
                  Nền tảng đấu giá hàng đầu Việt Nam
                </p>
              </div>
              <div class="col-md-6 pt-1 d-flex align-items-end justify-content-end">
                <p class="fs-8">
                  <i class="bi bi-telephone-fill me">
                  
                
              </i> HOTLINE: 0987654321{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container p-2 d-flex justify-content-between align-items-center">
          <div>
            <img src=" /img/logoK.jpg" class="d-block w-100" alt="..." />
            {/*<a class="navbar-brand" href="#"><span class="text-success">HPL</span><span>TRADE</span></a>*/}
          </div>
          <nav class="navbar navbar-expand-lg bg-white p-2 d-flex  flex-column ">
            <div class="container px-0 mx-0">
              
            </div>
            <div class="container p-2 d-flex justify-content-between align-items-center">
              <nav class="navbar navbar-expand-lg bg-white ">
                <div class="container px-0 mx-0">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse "
                    id="navbarTogglerDemo01"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                      <li class="nav-item">
                        <Link class="nav-link text-black" href={"/"}>
                          Home
                        </Link>
                        {/* <a class="nav-link text-black" href='/' >Trang Chủ</a> */}
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link text-black" href={"/ "}>
                          Introduce
                        </Link>
                        {/* <a class="nav-link text-black" href='gioithieu' >Giới Thiệu</a> */}
                      </li>
                      <li class="nav-item">
                        {/* <a class="nav-link text-black" href='sanpham'>Sản Phẩm Đấu Giá</a> */}
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href={"/products"}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                        Product
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item"  href={"/products"}>
                              Tất cả sản phẩm 
                            </a>
                          </li>
                          <Category></Category>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-black">Blog</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-black">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <form class="d-flex ms-4" action="/search">
                <input
                  class="form-control me-2"
                  name="keyword"
                  placeholder="Nhập tên sản phẩm"
                />
                <button class="btn btn-outline-success" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </form>
                </div>
              </nav>
            </div>
          </nav>
          <div class="d-flex align-items-center ms-5">
            <div
              id="cart"
              class="position-relative d-flex justify-content-center align-items-center rounded-circle bg-black bg-opacity-10 px-2 py-1 "
            >
              <Link href={"/cart"}>
                <i class="bi bi-cart fs-5  fw-bolder text-dark" />
              </Link>
              <div class="">
                <span
                  id="amount-cart"
                  class="text-white  position-absolute top-0 start-75 translate-middle bg-success px-2 rounded-circle"
                >
                {cartCount}
                </span>
              </div>
            </div>
           
            <div
              id="account"
              class="d-flex justify-content-center align-items-center rounded-circle bg-black bg-opacity-10  mx-2 px-2 py-1"
            >
            <li class="nav-item dropdown taikhoan-icon">
                                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-person-circle fs-5 fw-bolder text-dark" /> <span>{user ? `${user.username}` :""}</span>
                                </a>
                                <ul class="dropdown-menu">
                               
                                    <li><a class="dropdown-item" href="/register">Đăng ký</a></li>
                                    <li><a class="dropdown-item" href="/login">Đăng nhập</a></li>
                                    <li> <button  className="btn btn-outline-secondary"  onClick={handleLogout}>
                                    <i className="bi bi-box-arrow-right"></i> Thoát
                                </button>  </li>
                                </ul>
                            </li>
              
              {/* <a ><i class="bi bi-person-circle fw-bolder fs-5 text-secondary"></i></a> */}
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
};

export default Header;
