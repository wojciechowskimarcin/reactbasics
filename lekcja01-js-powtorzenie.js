console.log("ala ma kota");

// Funkcje - normalne - strzałkowe

const showValue = (wartosc) => {
    return wartosc*20;
};
const showText = (wartosc) => (20*wartosc); // zwracanie wartości przez ()
console.log(`zwrócona wartość showValue: ${showValue(10)}`); //użycie temlate string ``
console.log("Zwrócona wartość showText:",showText(5)); // konkatenacja  --> łączenie danych przez przecinek

const suma = (val1, val2) =>( //dwuargumentowa funkcja
    val1+val2
);

console.log("Po dodaniu " + 2 + "+" + 4 + "=" + suma(2,4)); //konkatenacja --> łączenie danych przez operator +

// Metody join, concat

// join -  kokatenuje elementy cyfrowe i zwraca string (ciąg znaków)

const linuxUsers = ["adam", "root", "adminzsp", "student"];
const linuxUsersString = linuxUsers.join();
console.log(`Użytkownicy Linuksa: ${linuxUsersString}`);

// concat - łączy tablice

const users = ["antoni", "makeLab", "egzamin"];
const newLinuxUsers = linuxUsers.concat(users); // łączymy tablicę users z tablicą linuxUsers
console.log(`Lista użytkowników po połączeniu [newLinuxUsers]: ${newLinuxUsers}`);

// spread operator (operator rozprzestrzeniania?)
const updatedUsers = [...newLinuxUsers, "marcin", "jakub", "oskar"];
console.log(`Lista użytkowników po połączeniu za pomocą spread op. -> [updatedUsers]: ${updatedUsers}`);

// map - iteracyjne wykonywanie operacji na elementach
const realNames = [
    "Adam Zawiślak", "Superużytkownik", "Administrator Systemów",
    "Randomowy Uczeń", "Antoni Jakubowski","Tworzyciel Światów",
    "Poddany egzaminowi","Marcin Wu", "Jakub Cybulski", "Oskar Damięcki"];

const usersObj = []; // tworznie tablicy użytkowników

const makeRealNames = () =>{
    updatedUsers.map((login, index) => usersObj.push({"name": login, "realName": realNames[index]}));
};

makeRealNames();
console.log(usersObj);

// forEach - iteracja dla każdego elementu
const usersObj2 = [];
const makeRealNames2 = () =>{
    updatedUsers.forEach((login, index) => usersObj2.push({"name": login, "realName": realNames[index]}));
};
makeRealNames2();
console.log(usersObj2);


// filter - zwraca tablicę, których elementy spełniają określone warunki

// warunek - pierwsza litera loginu musi być "r"

const usersR = updatedUsers.filter(user => {
   return  user[0] == "r";
}
);
console.log("Użytkownicy na literę 'r':"+usersR);
// warunek - liczba znaków w nazwie użytkowników jest krótsza niż 6
const users6 = updatedUsers.filter(user => {
    return user.length<5;
});
console.log(`Nazwy użytkowników na mniej niż 6 znaków: ${users6}`);

// findIndex - zwraca pierwszy index elementu tablicy jeżeli znajdzie element tablicy o określonym warunku, 
//             natomiast jeśli nie znajdzie zwraca wartość -1

// warunek - znajdź studenta, który na 18 lat

const students = [
    {login: "j.kowalski", age: 20},
    {login: "m.zawiślak", age: 16},
    {login: "a.kowalska", age: 18},
    {login: "z.małysz", age: 30}
];

const findAge18 = () => (  // <-- zwróć uwagę na okrągły nawias, to oznacza, że funkcja zwróci wartość
    students.findIndex(student => student.age == 18)
);
studnet18 = findAge18();
console.log(studnet18);

console.log(`Pierwszy znaleziony student z wiekiem 18lat ma index:${studnet18} i ma login: ${students[studnet18].login}`);

// find - zwraca element tablicy jeżeli jako pierwszy spełni określony warunek
const findAge = (wiek) => (
    students.find(student => student.age >= wiek)
);

console.log(`Pierwszy znaleziony student z wiekiem >= 18lat ma login:${findAge(18).login}`);
console.log("Pierwszy element tablicy z wiekiem >=18:",findAge(18));
