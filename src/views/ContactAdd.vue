<template>
    <div class="page">
        <h4>Thêm Liên hệ Mới</h4>
        <ContactForm @submit:contact="createContact" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import ContactService from '@/servies/contact.service';

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            message: '',
        };
    },
    methods: {
        async createContact(data) {
            try {
                await ContactService.create(data);
                alert('Liên hệ được thêm thành công.');
                this.$router.push({ name: 'contactbook' });
            } catch (error) {
                console.log(error);
                this.message = 'Không thể thêm liên hệ mới.';
            }
        },
    },
    created() {
        this.message = '';
    },
};
</script>
