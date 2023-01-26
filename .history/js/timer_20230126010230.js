document.addEventListener('DOMContentLoaded', () => {

    // const $days = document.querySelector('.wrapper-item_days');
    const $hours = document.querySelector('.wrapper-item_hours');
    const $minuts = document.querySelector('.wrapper-item_minuts');
    const $seconds = document.querySelector('.wrapper-item_seconds');

    const lastDate = '2023-01-28';

    function getTimeRemaining(lastDate) {
        const time = Date.parse(lastDate) - Date.parse(new Date());
        const day = Math.floor(time / (1000 * 60 * 60) / 24);
        const hour = Math.floor(time / (1000 * 60 * 60) % 24);
        const minut = Math.floor(time / (1000 * 60) % 60);
        const second = Math.floor((time / 1000) % 60);

        return {
            // day,
            hour,
            minut,
            second
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer() {
        const timer = getTimeRemaining(lastDate);

        if (timer.hour < 0) {
            const $timerWrapper = document.querySelector('.discont-timer_wrapper');
            document.querySelector('.timer-wrapper_text').remove();
            $timerWrapper.innerHTML = '<div class="timer-wrapper_end">Акция уже закончилась</div>';
            clearInterval(timerInterval);
        }

        // $days.textContent = timer.day < 10 ? '0' + timer.day : timer.day; 
        $hours.textContent = timer.hour < 10 ? '0' + timer.hour : timer.hour;
        $minuts.textContent = timer.minut < 10 ? '0' + timer.minut : timer.minut;
        $seconds.textContent = timer.second < 10 ? '0' + timer.second : timer.second;
    }

})