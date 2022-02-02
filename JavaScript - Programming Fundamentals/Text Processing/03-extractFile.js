function solve(input) {
    const fullName = input.substring(input.lastIndexOf('\\') + 1);
    const fileName = fullName.substring(0, fullName.lastIndexOf('.'));
    const fileExtension = fullName.substring(fullName.lastIndexOf('.') + 1);
    console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
}

//Test Cases
solve('C:\\Internal\\training-internal\\Template.pptx');
console.log('\n-----------------\n');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');