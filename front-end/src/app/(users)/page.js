import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "./components/ProductCard";
import Banner from "./components/Banner";
import Category from "./category/page";
import ProductSale from "./components/productsale.jsx";
import ProductBestselling from "./components/productbestselling";
import ProductHot from "./components/producthot";

export default async function Home() {
  const res = await fetch("http://localhost:3000/products", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <>
      <Banner />
      <div className="container my-3">
        <div>
          <div className="row d-flex justify-content-between mx-1 ">
            <div class="container-nav-brand-table-title">
              <div class="nav-brand-table-title-animated">
                <h3>Sản phẩm mới </h3>
              </div>
            </div>
          </div>
          <div className="row ">
            <ProductCard data={data} />
          </div>
        </div>
      </div>
      <ProductSale />

      <div className="container my-3">
        <div class="container-outfit-product-all">
          <div class="container-nav-brand-table-title">
            <div class="nav-brand-table-title-animated">
              <h3>Trend Outfits</h3>
            </div>
          </div>
          <div class="container-outfit-product-items">
            <div class="outfit-product-item">
              <img src="img/outfit-1.jpg" alt="" />
              <div class="outfit-product-item-text-content">
                <span data-text="Outfits 1">Outfits 1</span>
              </div>
            </div>
            <div class="outfit-product-item">
              <img src="img/outfit-2.jpg" alt="" />
              <div class="outfit-product-item-text-content">
                <span>Outfits 2</span>
                <div class="outfit-product-item-text-content">
                  <span data-text="Outfits 2">Outfits 2</span>
                </div>
              </div>
            </div>
            <div class="outfit-product-item">
              <img src="img/outfit-3.jpg" alt="" />
              <div class="outfit-product-item-text-content">
                <span>Outfits 3</span>
                <div class="outfit-product-item-text-content">
                  <span data-text="Outfits 3">Outfits 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductBestselling />
      <div class="container-nav-brand-table-title">
        <div class="nav-brand-table-title-animated">
          <h3>quản cáo </h3>
        </div>
      </div>
      <div class="container-outfit-product-item-big">
        <img src="img/banner-items.jpg" alt="" />
      </div>
      <ProductHot />
      <div className="container my-3">
        <div class="container-nav-brand-table-title">
          <div class="nav-brand-table-title-animated">
            <h3>quản cáo </h3>
          </div>
        </div>
        <div class="container-nav-brand-table-poduct">
          <div class="container-nav-brand-table-poduct-items">
            <div class="container-nav-brand-table-poduct-item">
              <div class="brand-table-poduct-item-img">
                <img src="img/danhmuc.jpg" alt="" />
              </div>
              <div class="brand-table-poduct-item-name">
                <span>nike</span>
              </div>
              <div class="brand-table-poduct-item-name-main">
                <button>Xem Ngay</button>
              </div>
              <div class="brand-table-poduct-item-thanhtoan">
                <span>
                  <i class="bx bx-receipt"></i> Đã bán 105
                </span>
              </div>
            </div>
            <div class="container-nav-brand-table-poduct-item">
              <div class="brand-table-poduct-item-img">
                <img src="img/danhmuc-bancelona.jpg" alt="" />
              </div>
              <div class="brand-table-poduct-item-name">
                <span>Bancelonal</span>
              </div>
              <div class="brand-table-poduct-item-name-main">
                <button>Xem Ngay</button>
              </div>
              <div class="brand-table-poduct-item-thanhtoan">
                <span>
                  <i class="bx bx-receipt"></i> Đã bán 555
                </span>
              </div>
            </div>
            <div class="container-nav-brand-table-poduct-item">
              <div class="brand-table-poduct-item-img">
                <img src="img/danhmuc-nike-max.jpg" alt="" />
              </div>
              <div class="brand-table-poduct-item-name">
                <span>Nike Max jr</span>
              </div>
              <div class="brand-table-poduct-item-name-main">
                <button>Xem Ngay</button>
              </div>
              <div class="brand-table-poduct-item-thanhtoan">
                <span>
                  <i class="bx bx-receipt"></i> Đã bán 200
                </span>
              </div>
            </div>
            <div class="container-nav-brand-table-poduct-item">
              <div class="brand-table-poduct-item-img">
                <img src="img/danhmuc-rela.jpg" alt="" />
              </div>
              <div class="brand-table-poduct-item-name">
                <span>Rela</span>
              </div>
              <div class="brand-table-poduct-item-name-main">
                <button>Xem Ngay</button>
              </div>
              <div class="brand-table-poduct-item-thanhtoan">
                <span>
                  <i class="bx bx-receipt"></i> Đã bán 88
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
