<?php
class MyDateTime extends DateTime
{
    private $periods;
    private $holidays;

    public function __construct(string $time = 'now', \DateTimeZone $timezone = null)
    {
        parent::__construct($time, $timezone);

        // Put periods in a var cache
        $this->periods = [
            1 => new DateInterval('P1D'),
            2 => new DateInterval('P2D'),
            3 => new DateInterval('P3D'),
        ];
    }
    //=======================================================================
    //Guetters
    //=======================================================================
    //get working days
    public function getWorkingDays($startDate, $endDate, $holidays=[])
    {
        // do strtotime calculations just once
        $endDate = strtotime($endDate);
        $startDate = strtotime($startDate);
     
     
        //The total number of days between the two dates. We compute the no. of seconds and divide it to 60*60*24
        //We add one to inlude both dates in the interval.
        $days = ($endDate - $startDate) / 86400 + 1;
     
        $no_full_weeks = floor($days / 7);
        $no_remaining_days = fmod($days, 7);
     
        //It will return 1 if it's Monday,.. ,7 for Sunday
        $the_first_day_of_week = date("N", $startDate);
        $the_last_day_of_week = date("N", $endDate);
     
        //---->The two can be equal in leap years when february has 29 days, the equal sign is added here
        //In the first case the whole interval is within a week, in the second case the interval falls in two weeks.
        if ($the_first_day_of_week <= $the_last_day_of_week) {
            if ($the_first_day_of_week <= 6 && 6 <= $the_last_day_of_week) {
                $no_remaining_days--;
            }
            if ($the_first_day_of_week <= 7 && 7 <= $the_last_day_of_week) {
                $no_remaining_days--;
            }
        } else {
            // (edit by Tokes to fix an edge case where the start day was a Sunday
            // and the end day was NOT a Saturday)
     
            // the day of the week for start is later than the day of the week for end
            if ($the_first_day_of_week == 7) {
                // if the start date is a Sunday, then we definitely subtract 1 day
                $no_remaining_days--;
     
                if ($the_last_day_of_week == 6) {
                    // if the end date is a Saturday, then we subtract another day
                    $no_remaining_days--;
                }
            } else {
                // the start date was a Saturday (or earlier), and the end date was (Mon..Fri)
                // so we skip an entire weekend and subtract 2 days
                $no_remaining_days -= 2;
            }
        }
     
        //The no. of business days is: (number of weeks between the two dates) * (5 working days) + the remainder
        //---->february in none leap years gave a remainder of 0 but still calculated weekends between first and last day, this is one way to fix it
        $workingDays = $no_full_weeks * 5;
        if ($no_remaining_days > 0) {
            $workingDays += $no_remaining_days;
        }
     
        //We subtract the holidays
        foreach ($holidays as $holiday) {
            $time_stamp=strtotime($holiday);
            //If the holiday doesn't fall in weekend
            if ($startDate <= $time_stamp && $time_stamp <= $endDate && date("N", $time_stamp) != 6 && date("N", $time_stamp) != 7) {
                $workingDays--;
            }
        }
     
        return $workingDays;
    }




    public function getPeriods(): array
    {
        return $this->periods;
    }

    public function getHolidays(): array
    {
        return $this->holidays;
    }
    //=======================================================================
    //Setters
    //=======================================================================
    public function setPeriods(array $periods): void
    {
        $this->periods = $periods;
    }
    public function setHolidays(array $holidays)
    {
        $this->holidays = array_fill_keys($holidays, true);

        return $this;
    }
    public function addHoliday($day)
    {
        if (preg_match('/^[0-9]{2}-[0-9]{2}-20[0-9]{2}$/', $day)) {
            $this->holidays[$day] = true;
        }

        return $this;
    }
    //=======================================================================
    //checkers
    //=======================================================================
    private function isBusinnessDay(): bool
    {
        $key = $this->format('d-m-Y');

        return !$this->isWeekend() && empty($this->holidays[$key]);
    }
    //is friday
    private function isFriday(): bool
    {
        return $this->format('N') == 5;
    }
    //is saturday
    private function isSaturday(): bool
    {
        return $this->format('N') == 6;
    }
    //is sunday
    public function isSunday(): bool
    {
        return $this->format('N') == 7;
    }
    //is weekend
    public function isWeekend(): bool
    {
        return ($this->isSunday() || $this->isSaturday());
    }
    //=======================================================================
    //Operations
    //=======================================================================
    public function addBusinessDays(int $nb)
    {
        if ($nb > 0) {
            for ($a = 0; $a < $nb; $a++) {
                $this->addBusinessDay();
            }
        }
        return $this;
    }

    private function addBusinessDay()
    {
        if ($this->isFriday()) {
            $this->add($this->periods[3]);
        } elseif ($this->isSaturday()) {
            $this->add($this->periods[2]);
        } else {
            $this->add($this->periods[1]);
        }

        // Check for holidays
        while (!$this->isBusinnessDay()) {
            $this->addBusinessDay();
        }
    }
}