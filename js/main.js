// quản lý tuyển sinh
document.getElementById("xetTuyen").onclick = function xetTuyen() {
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var toan = Number(document.getElementById("toan").value);
  var ly = Number(document.getElementById("ly").value);
  var hoa = Number(document.getElementById("hoa").value);
  var khuVuc = Number(document.getElementById("khuVuc").value);
  var doiTuong = Number(document.getElementById("doiTuong").value);
  var tongDiem3mon = toan + ly + hoa;
  var tongDiemsaucung = tongDiem3mon + khuVuc + doiTuong;
  if (diemChuan == "" ) {
    alert("Bạn chưa nhập điểm chuẩn của hội đồng.");
  } else if(diemChuan < 0 ||toan < 0 || ly < 0 || hoa < 0){
    alert("Không thể tồn tại điểm có giá trị nhỏ hơn 0 bạn nhé.");
  } else {
    if (toan == 0 || ly == 0 || hoa == 0) {
      var ketQua = "Bạn đã rớt, vì điểm liệt.";
      document.getElementById("ketQua").innerHTML =
        ketQua + " Tổng điểm là: " + tongDiemsaucung + " điểm.";
      document.getElementById("ketQua").style.color = "red";
    } else if (tongDiemsaucung < diemChuan) {
      var ketQua = "Bạn đã rớt.";
      document.getElementById("ketQua").innerHTML =
        ketQua + " Tổng điểm là: " + tongDiemsaucung + " điểm.";
      document.getElementById("ketQua").style.color = "red";
    } else {
      var ketQua = "Bạn đã đậu.";
      document.getElementById("ketQua").innerHTML =
        ketQua + " Tổng điểm là: " + tongDiemsaucung + " điểm.";
      document.getElementById("ketQua").style.color = "royalblue";
    }
  }
};
// tính tiền điện
document.getElementById("tinhTiendien").onclick = function tinhTiendien() {
  const muc1 = 500;
  const muc2 = 650;
  const muc3 = 850;
  const muc4 = 1100;
  const muc5 = 1300;
  var nguoiDung = document.getElementById("nguoiDung").value;
  var x = Number(document.getElementById("soKwdien").value);
  var tienDien = 0;
  if (x < 0) {
    alert("Số Kw tiêu thụ phải lớn hơn 0 bạn nhé.");
  } else {
    if (x > 50) {
      tienDien = 50 * 500;
      x -= 50;
      if (x > 50) {
        tienDien += 50 * 650;
        x -= 50;
        if (x > 100) {
          tienDien += 100 * 850;
          x -= 100;
          if (x > 150) {
            tienDien += 150 * 1100;
            x -= 150;
            if (x > 0) {
              tienDien += x * 1300;
            }
          } else {
            tienDien += x * 1100;
          }
        } else {
          tienDien += x * 850;
        }
      } else {
        tienDien += x * 650;
      }
    } else {
      //nhỏ hơn 50
      tienDien = x * 500;
    }
    document.getElementById("tienDien").innerHTML =
      "Số tiền điện " + nguoiDung + " phải trả: " + tienDien.toLocaleString() + "đ";
  }
};
// tính thuế TNCN
document.getElementById("tinhTienthue").onclick = function tinhTienthue() {
  var hoVaten = document.getElementById("hoVaten").value;
  var tongThunhap = Number(document.getElementById("tongThunhap").value);
  var soNguoiphuthuoc = Number(
    document.getElementById("soNguoiphuthuoc").value
  );
  var phanTramthue = 0;
  const heSonguoiphuthuoc = 1600000;
  const trieu = 1000000;
  if (tongThunhap < soNguoiphuthuoc * heSonguoiphuthuoc) {
    alert("Thu nhập của bạn không đủ lo cho gia đình rồi, cố gắng cày thêm nha.");
  } else { 
    var thuNhapchiuthue =
      tongThunhap - 4000000 - soNguoiphuthuoc * heSonguoiphuthuoc;
    if (thuNhapchiuthue <= 60 * trieu) {
      phanTramthue = 5 / 100;
    } else if (thuNhapchiuthue > 60 * trieu && thuNhapchiuthue <= 120 * trieu) {
      phanTramthue = 10 / 100;
    } else if (
      thuNhapchiuthue > 120 * trieu &&
      thuNhapchiuthue <= 210 * trieu
    ) {
      phanTramthue = 15 / 100;
    } else if (
      thuNhapchiuthue > 210 * trieu &&
      thuNhapchiuthue <= 384 * trieu
    ) {
      phanTramthue = 20 / 100;
    } else if (
      thuNhapchiuthue > 384 * trieu &&
      thuNhapchiuthue <= 624 * trieu
    ) {
      phanTramthue = 25 / 100;
    } else if (thuNhapchiuthue > 624 * trieu && thuNhapchiuthue < 960 * trieu) {
      phanTramthue = 30 / 100;
    } else if (thuNhapchiuthue > 960 * trieu) {
      phanTramthue = 35 / 100;
    }
    var tienThuephainop = thuNhapchiuthue * phanTramthue;
    document.getElementById("tienThuetncn").innerHTML =
      hoVaten + " ơi, " + " tiền thuế TNCN phải nộp là: " + tienThuephainop.toLocaleString() +"đ";
  }
};
// tính tiền cáp
document.getElementById("loaiKhachhang").onchange = function () {
  var loaiKhachhang = document.getElementById("loaiKhachhang").value;
  console.log(loaiKhachhang);
  if (loaiKhachhang == "doanh nghiệp") {
    document.getElementById("soKetnoi").disabled = false;
  } else if (loaiKhachhang == "nhà dân") {
    document.getElementById("soKetnoi").disabled = true;
  }
};
document.getElementById("tinhTiencap").onclick = function tinhTiencap() {
  var maKhachhang = document.getElementById("maKhachhang").value;
  var loaiKhachhang = document.getElementById("loaiKhachhang").value;
  if (loaiKhachhang == "nhà dân") {
    var phiHoadon = 4.5;
    var phiCoban = 20.5;
    var phiKenhcaocap = 7.5;
    var soKenhcaocap = Number(document.getElementById("soKenhcaocap").value);
    if (soKenhcaocap < 0) {
      alert("Số kênh cao cấp không được nhỏ hơn 0 bạn nhé");
    } else {
      var tienCap = phiHoadon + phiCoban + soKenhcaocap * phiKenhcaocap;
      document.getElementById("tienCap").innerHTML =
        "Số tiền cáp của nhà dân " + maKhachhang + " là: " + "$" + tienCap.toLocaleString();
    }
  } else if (loaiKhachhang == "doanh nghiệp") {
    var phiHoadon = 15;
    var phiCoban = 75;
    var phiKetnoithem = 5;
    var phiKenhcaocap = 50;
    var soKetnoi = Number(document.getElementById("soKetnoi").value);
    var soKenhcaocap = Number(document.getElementById("soKenhcaocap").value);
    if (soKetnoi < 0 || soKenhcaocap < 0) {
      alert("Số kết nối và số kênh cao cấp không được nhỏ hơn 0 bán nhé.");
    } else {
      if (soKetnoi <= 10) {
        var tienCap = phiHoadon + phiCoban + soKenhcaocap * phiKenhcaocap;
      } else {
        var tienCap =
          phiHoadon +
          phiCoban +
          soKenhcaocap * phiKenhcaocap +
          (soKetnoi - 10) * phiKetnoithem;
      }
      document.getElementById("tienCap").innerHTML =
        "Số tiền cáp của doanh nghiệp " + maKhachhang + " là: " + "$" + tienCap.toLocaleString();
    }
  }
};
