

/*
console.log(Math.floor(Math.random()*10))
console.log(new Date())
var a=new Date()

console.log(a.getFullYear())
console.log(a.getMonth())
console.log(a.getDate())
console.log(a.getDay())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())
console.log(a.getMilliseconds())
console.log(a.getTime())

var bulan=new Date().getMonth()
console.log(bulan)
var bulanfinale=" "
switch (bulan){
    case 0:
        bulanfinale="Januari"
        break;
    case 1:
        bulanfinale="Februari"
        break;
    case 2:
        bulanfinale="Maret"
        break;
    case 3:
        bulanfinale="April"
        break;
    case 4:
        bulanfinale="Mei"
        break;
    case 5:
        bulanfinale="Juni"
        break;
    case 6:
        bulanfinale="Juli"
        break;
    case 7:
        bulanfinale="Agustus"
        break;
    case 8:
        bulanfinale="September"
        break;
    case 9:
        bulanfinale="Oktober"
        break;
    case 10:
        bulanfinale="November"
        break;
    default:
        bulanfinale="Desember"
        break;          
    }
console.log("bulan ini bulan: "+bulanfinale)
*/

var massa=prompt("berapa berat anda?")
var tinggi=prompt("berapa tinggi anda dalam cm?")

var imt=massa/Math.pow((tinggi/100))

if(imt<18.5){
    alert("berat anda kurang")
}else if(imt>=18.5&&imt<=24.9){
    alert("berat badan ideal")
}else if(imt>=25&&imt<=29.9){
    alert("BB berlebih")
}else if(imt>=30&&imt<=39.9){
    alert("BB sangat berlebih")
}else{
    alert("obesitas")
}