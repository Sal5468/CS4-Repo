function Library()
{
    this.books = [];
    this.index = 0;
    this.addBook = function(book)
    {
        this.books[this.index] = book;
        this.index++;
    }
    this.display = function()
    {
        for (let i of this.books)
            console.log(i)
    }

    this.ratedAbove = function(rating)
    {
        console.log("Books rated above " + rating)
        for (let i of this.books)
        {
            if (i.rating>rating)
                console.log(i.title)
        }

    }
}

function Address(num,street,city) {
  this.number = num
  this.street = street
  this.city = city
  this.getInfo = function() {
      return("Address: " + this.number + " " + this.street + " " + this.city);
}}


function Person(name,age,address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.getInfo = function() {
      return(this.name+" "+this.age+" "+this.address.getInfo())
    }
}
function Book(title,pages,rating,checkedOut=null) {
    this.title = title;
    this.pages = pages;
    this.rating = rating;
    this.CheckedOut = checkedOut;

    this.borrow = function(person)
    {this.CheckedOut = person}

    this.unborrow = function()
    {this.CheckedOut = null}

    this.getInfo = function()
    {
      if(this.CheckedOut)
      {return(this.title+ " "+this.pages+" "+this.rating+" "+this.CheckedOut.getInfo())}
      else
      {return(this.title+ " "+this.pages+" "+this.rating+" notCheckedOut")}
    }
}

////////////////////////////////////////////////////
let theLibrary = new Library();

let annieMayAddress = new Address(231,"Lake Drive","Oceanside");

let annieMay = new Person("Annie May",14,annieMayAddress);
console.log(annieMay.getInfo())

let theHobbit = new Book("The Hobbit",348,9.5,annieMay);
let endersGame = new Book("Enders Game",278,9.7);
let gobletOfFire = new Book("Goblet Of Fire",722,9.3);

theLibrary.addBook(theHobbit);
theLibrary.addBook(endersGame);
theLibrary.addBook(gobletOfFire);
theLibrary.display();
console.log("==============");
endersGame.borrow(annieMay)
theLibrary.display();

/////////////////////
console.log("==============");
console.log(annieMay.getInfo());
console.log("==============");
console.log(theHobbit.getInfo());
console.log("==============");
theLibrary.ratedAbove(9.5)
