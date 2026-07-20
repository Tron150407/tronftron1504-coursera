/* ==========================================================================
   HÀM 1: upDate(previewPic) - Kích hoạt khi RÊ CHUỘT VÀO ảnh nhỏ
   ========================================================================== */
function upDate(previewPic) {
    // 1. Kiểm tra sự kiện hoạt động trong Console (F12)
    console.log("Sự kiện di chuột vào (onmouseover) đã kích hoạt!");
    console.log("Văn bản ALT:", previewPic.alt);
    console.log("Đường dẫn SRC:", previewPic.src);

    // 2. Chọn phần tử hiển thị lớn có id="image"
    var imageDiv = document.getElementById("image");

    // 3. Thay đổi văn bản của ô lớn thành nội dung thẻ alt của ảnh nhỏ
    imageDiv.innerHTML = previewPic.alt;

    // 4. Sửa lại cú pháp chuẩn: Đổi hình nền ô lớn thành đường dẫn ảnh nhỏ
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* ==========================================================================
   HÀM 2: undo() - Kích hoạt khi RỜI CHUỘT KHỎI ảnh nhỏ
   ========================================================================== */
function undo() {
    // 1. Kiểm tra sự kiện rời chuột trong Console
    console.log("Sự kiện rời chuột (onmouseout) đã kích hoạt!");

    // 2. Chọn phần tử hiển thị lớn có id="image"
    var imageDiv = document.getElementById("image");

    // 3. Xóa hình nền bằng cách trả về giá trị url('') trống ban đầu
    imageDiv.style.backgroundImage = "url('')";

    // 4. Trả lại đoạn văn bản gốc ban đầu
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}