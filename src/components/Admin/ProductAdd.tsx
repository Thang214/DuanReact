import useProductMutation from "@/hooks/useProductMutation";
import "bootstrap/dist/css/bootstrap.min.css";
const ProductAdd = () => {
  const { form, onSubmit, isPending } = useProductMutation({
    action: "CREATE",
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-4 mb-5">
              <div className="card-header">
                <h1 className="h3 mb-0">Thêm sản phẩm</h1>
              </div>
              <div className="card-body">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      {...form.register("name", { required: true })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productCategory" className="form-label">
                      Danh muc sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productCategory"
                      {...form.register("category", { required: true })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productImage" className="form-label">
                      Ảnh sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productImage"
                      {...form.register("image", { required: true })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">
                      Giá sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productPrice"
                      {...form.register("price")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productQuantity" className="form-label">
                      Số lượng sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productQuantity"
                      {...form.register("quantity")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productDesc" className="form-label">
                      Mô tả sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productDesc"
                      {...form.register("description")}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productSales" className="form-label">
                      Giá khuyến mãi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productSales"
                      {...form.register("discount")}
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      {isPending ? "Creating..." : "Thêm sản phẩm"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
