
  /**
   * @method show_anagram_result()
   * @desc by using this function get string value of form and
   * display result.
   */
  show_anagram_result = () => {
    var stringFirst = document.getElementById('stringOne').value;
    var stringSecond = document.getElementById('stringTwo').value;
    document.getElementById('responseMsg').innerHTML  = `Is Anagram:  ${is_anagram(stringFirst, stringSecond)}`;
  };
  /**
   * @method is_anagram()
   * @param string1: fisrt input string
   * @param string2: Second input string,
   * @desc to check passing parameters are anagram or not and return true/false
   */
  is_anagram = (string1, string2) => {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    return string1.split('').sort().join('') === string2.split('').sort().join('');
  }
