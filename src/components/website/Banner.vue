<template>
	<div class="">
		<div class="container">
			<div class="row bg-green p-4 rounded-3 w-100 mx-auto">
				<div class="col">
					<h1 class="uppercase text-white text-uppercase text-center">
						<slot name="title"></slot>
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
h1 {
	font-size: 2rem;
}
</style>