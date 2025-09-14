from django.db import models
from django.utils import timezone


class ContactInquiry(models.Model):
    name = models.CharField(max_length=100, verbose_name="Full Name")
    phone_number = models.CharField(max_length=15, verbose_name="Phone Number")
    message = models.TextField(verbose_name="Message")
    created_at = models.DateTimeField(default=timezone.now, verbose_name="Created At")
    is_read = models.BooleanField(default=False, verbose_name="Is Read")
    is_responded = models.BooleanField(default=False, verbose_name="Is Responded")
    
    class Meta:
        verbose_name = "Contact Inquiry"
        verbose_name_plural = "Contact Inquiries"
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"
