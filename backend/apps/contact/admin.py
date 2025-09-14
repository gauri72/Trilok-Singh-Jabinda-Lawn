from django.contrib import admin
from .models import ContactInquiry


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone_number', 'created_at', 'is_read', 'is_responded']
    list_filter = ['is_read', 'is_responded', 'created_at']
    search_fields = ['name', 'phone_number', 'message']
    readonly_fields = ['created_at']
    list_editable = ['is_read', 'is_responded']
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Inquiry Details', {
            'fields': ('name', 'phone_number', 'message')
        }),
        ('Status', {
            'fields': ('is_read', 'is_responded')
        }),
        ('Timestamps', {
            'fields': ('created_at',),
            'classes': ('collapse',)
        }),
    )
