<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Contacts</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/add-contact" tag="li" class="navbar-brand" activeClass="active"><a id="add-contact">Add Contact</a></router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  
}
</script>

<style>
#add-contact {
    display: inline;
}

</style>

