// let USD;
// let VNĐ = 23000 * USĐ;
let a = document.getElementById("traloi1");
let b = document.getElementById("traloi2");
let c =document.getElementById("money");
let d = document.getElementById("KQ");
const chuyendoi = 23000;
function USD(){
    if( a.value == "VNĐ" && b.value == "USD"){
        d.innerHTML = c.value / chuyendoi;
    }
    else if(a.value == "USD" && b.value == "VNĐ"){
        d.innerHTML = c.value * chuyendoi;
    }
    else{
        document.write("Bạn hãy chọn lại mục chuyển đổi")
    }
}

