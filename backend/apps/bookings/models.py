from django.db import models


class Lawn(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField()
    capacity = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Booking(models.Model):
    lawn = models.ForeignKey(Lawn, on_delete=models.CASCADE, related_name='bookings')
    customer_name = models.CharField(max_length=200)
    customer_phone = models.CharField(max_length=20)
    event_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('lawn', 'event_date', 'start_time', 'end_time')

    def __str__(self):
        return f"{self.customer_name} - {self.event_date}" 