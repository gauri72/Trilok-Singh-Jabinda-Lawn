from django.contrib import admin
from .models import Lawn, Booking

@admin.register(Lawn)
class LawnAdmin(admin.ModelAdmin):
    list_display = ("name", "capacity")
    search_fields = ("name",)

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("customer_name", "lawn", "event_date", "start_time", "end_time")
    list_filter = ("event_date", "lawn")
    search_fields = ("customer_name", "customer_phone") 