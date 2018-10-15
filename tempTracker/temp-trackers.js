class timeTracker {
  constructor() {
    this.tempArray = [];
    this.meanTemp = 0;
    this.modeTemp = 0;
    this.highestFreq = 0;
    this.modeFrequency = {};
  }
  /**
   * @method insert()
   * @desc used to store temp in array
   * in sorted formate.
   */
  insert() {
    document.getElementById('responseMsg').innerHTML = '';
    document.getElementById('errorMsg').innerHTML = '';
    var temp = parseInt(document.getElementById('temp').value);
    if (typeof temp !== 'number') {
      document.getElementById('errorMsg').innerHTML = 'Error: Please enter numeric value';
      return false;
    }
    if (temp < 0 || temp > 150) {
      document.getElementById('errorMsg').innerHTML = 'Error: Temp range should be 0 ℃ to 150 ℃';
      return false;
    }
    this.tempArray.push(temp);
    this.tempArray = this.tempArray.sort((a, b) => a - b);
    this.calculate_mean_temp();
    this.calculate_mode(temp);
    document.getElementById('responseMsg').innerHTML = `Temp ${temp} has been inserted successfully`;
  }
  /**
   * @method calculate_mean_temp()
   * @desc to calculate mean value of temp for every insertion and
   * assign the latest mean value into a varialbe. 
   */
  calculate_mean_temp() {
    this.meanTemp = this.tempArray.reduce((cumulative, temp) => cumulative + temp) / this.tempArray.length;
  }
  /**
   * @method calculate_mode()
   * @desc to calculate mode of temp for every insertion and
   * assign the latest mode value to a varialbe. 
   */
  calculate_mode(temp) {
    this.modeFrequency[temp] = this.modeFrequency[temp] ? this.modeFrequency[temp] + 1 : 1;
    if (this.highestFreq < this.modeFrequency[temp]) {
      this.highestFreq = this.modeFrequency[temp];
      this.modeTemp = temp;
    }
  }
  /**
   * @method get_temp_list()
   * @desc to get list of all temprature
   */
  get_temp_list(){
    return `Temperature List: ${this.tempArray.join(',')}`;
  }
  /**
   * @method get_max()
   * @desc to get max temperature.
   */
  get_max(){
    return `Max Temperature: ${(this.tempArray.length > 0 ?
    this.tempArray[this.tempArray.length - 1] : 0)}`;
  }
  /**
   * @method get_min()
   * @desc to get min temperature.
   */
  get_min(){
    return `Min Temperature: ${(this.tempArray[0] ? this.tempArray[0] : 0)}`;
  }
  /**
   * @method get_mean()
   * @desc to get mean value of inserted temperatures;
   */
  get_mean(){
    return `Mean of Temperature: ${this.meanTemp}`;
  }
  /**
   * @method get_mode()
   * @desc to get temperatures mode value 
   */
  get_mode(){
    return `Mode of Temperature: ${this.modeTemp}`;
  }
  /**
   * @method show_result()
   * @param flag: button click flag
   * @desc to display response value on the basis of actionFlag
   */
  show_result(flag){
    var responseMsg = '';
    if (flag === 'TEMPLIST') {
      responseMsg = this.get_temp_list();
    }
    else if (flag === 'MAXTEMP') {
      responseMsg = this.get_max();
    }
    else if (flag === 'MINTEMP') {
      responseMsg = this.get_min();
    }
    else if (flag === 'MEANTEMP') {
      responseMsg = this.get_mean();
    }
    else if (flag === 'MODETEMP') {
      responseMsg = this.get_mode();
    }
    document.getElementById('responseMsg').innerHTML = responseMsg;
  }
}

var tracker = new timeTracker();