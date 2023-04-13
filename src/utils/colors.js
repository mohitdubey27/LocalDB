// Using this color object when the device is in the light mode
export const lightColor = {
  skeletonPlaceHholder: 'lightgray',
  backgroundColor: '#FFFFFF',
  backgroundColor20: '#00000020',
  textColor: '#4C0027',
  titleColor: '#632626',
  borderColor: 'gray',
  optionText: 'blue',
  dropdownItemColor: 'gray',
  questionColor: '#072227',
  progressBackgroundColor: '#4C0027',
  horizontalLineColor: 'lightgray',
  placeholderColor: 'lightgray',
};

//Using this color object when the device is in the darkmode
export const darkColor = {
  skeletonPlaceHholder: 'lightgray',
  backgroundColor: '#000000',
  backgroundColor20: '#FFFFFF20',
  textColor: '#FFFFFF',
  titleColor: '#FFFFFF',
  borderColor: '#FFFFFF',
  optionText: '#00FF00',
  dropdownItemColor: '#00FFFF',
  questionColor: '#FFFFFF',
  progressBackgroundColor: '#FFFFFF',
  horizontalLineColor: 'white',
  placeholderColor: 'lightgray',
};

//Function created for get Character count counts from strings
export function getCharacterCountsInLetter(value) {
  const withoutSpaceWord = value.replace(/\s+/g, '');
  const words = withoutSpaceWord?.trim();
  const letterCount = [];
  //Running loop based on the length of the words
  for (let i = 0; i < words?.length; i++) {
    //Getting index of already stored characters from the object
    const getIindex = letterCount?.findIndex(
      item => item?.letter === words[i]?.toLowerCase(),
    );
    //Checking if the character is already present or not based on the index
    if (getIindex >= 0) {
      //If character is already present then here just incresing the count of that character
      letterCount.splice(getIindex, 1, {
        letter: words[i]?.toLowerCase(),
        count: letterCount[getIindex]?.count + 1,
      });
    } else {
      //Otherwise adding the character in the object
      letterCount?.push({letter: words[i].toLowerCase(), count: 1});
    }
  }

  //Sorting the object in alphabetical order
  letterCount?.sort((a, b) => a?.letter > b?.letter);

  //Getting only those characters which have more than one count
  const filteredCount = letterCount?.filter(item => item?.count > 1);
  return filteredCount;
}
