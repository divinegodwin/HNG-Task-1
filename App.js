document.addEventListener('DOMContentLoaded', function() {
    let currentTimeUtc = document.querySelector('.utc-time');
    let currentDay = document.querySelector('.current-day')
    function getTime() {
        const date = new Date();
        const timeInUtc = date.toUTCString();
        
      
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const day = days[date.getUTCDay()]
          currentTimeUtc.textContent = timeInUtc;
          currentDay.textContent = day;
       
      }
      
    getTime();
    setInterval(getTime, 1000)
  });
  
 