<!-- src/components/Layout/Navbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/#">
        <i class="bi bi-cpu-fill me-2"></i>
        海口市第四中学展翼科技社
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/#home">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#about">关于我们</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#groups">小组介绍</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#activities">社团活动</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#projects">项目展示</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#members">成员风采</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#join">加入我们</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div style="margin-top: 56px;"></div>
</template>

<script setup lang="ts">
// 导航栏组件逻辑
</script>

<style scoped>
.navbar-custom {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.navbar-custom .navbar-brand {
  color: #2d3748;
}

.navbar-custom .nav-link {
  color: #4a5568;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.navbar-custom .nav-link:hover {
  color: #2d3748;
  background: rgba(0, 0, 0, 0.04);
}

.navbar-custom .navbar-toggler {
  border-color: rgba(0, 0, 0, 0.1);
}

.navbar-custom .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(45, 55, 72, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

@media (max-width: 991px) {
  .navbar-custom {
    background: rgba(255, 255, 255, 0.95);
  }
}
</style>