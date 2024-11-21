var choice = prompt("Welcome to Perimeter Calculator. \n Please enter your Choice. \n1. Perimeter of Rectangle. \n2.Perimeter of Triangle. \n3.Perimeter of Circle. \n4.Perimeter of Parallelogram");

if (choice == '1') {
    var l = prompt('Enter the Length')
    var b = prompt('Enter the breadth')
    var result = Number(l) * Number(b) *2
    alert('The Perimeter of the rectangle is ' + result)
}
if (choice == '2') {
    var a = prompt('Enter the side a')
    var b = prompt('Enter the side b')
    var c = prompt('Enter the side c')
    var result = Number(a) + Number(b) + Number(c)
    alert('The Perimeter of the triangle is ' + result)
}
if (choice == '3') {
    var r = prompt('Enter the radius')
    var result = 2 *3.14 * Number(r)
    alert('The Perimeter of the circle  is ' + result)
}
if (choice == '4') {
    var h = prompt('Enter the height')
    var cb = prompt('Enter the corresponding base')
    var result = 2 * Number(h) + 2* Number(cb)
    alert('The Perimeter of the parallelogram is ' + result)
}