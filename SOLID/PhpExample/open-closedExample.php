<?php
interface Measurable
{
    public function getTotalLength();
    public function getSentLength();
}

final class Progress
{
    public function getSentLengthPercentage(Measurable $measurable)
    {
        return ($measurable->getSentLength() * 100) / $measurable->getTotalLength();
    }
}

final class Song implements Measurable
{
    private $totalLength;
    private $sentLength;
    public function getTotalLength()
    {
        return $this->totalLength;
    }
    public function getSentLength()
    {
        return $this->sentLength;
    }
}

<!-- before all class implementation calculate progress, after one class implement this calculation -->