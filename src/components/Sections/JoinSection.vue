<!-- src/components/Sections/JoinSection.vue -->
<template>
  <section id="join" class="py-5 bg-primary text-white">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h2 class="display-4 fw-bold mb-4">加入科技社</h2>
          <p class="lead mb-4">
            无论你是技术大神还是零基础小白，只要对科技充满热情，我们都欢迎你的加入！
          </p>

          <div class="join-benefits mb-5">
            <div class="benefit-item d-flex align-items-center mb-3">
              <i class="bi bi-check-circle-fill text-warning me-3 fs-4"></i>
              <span>专业的指导老师和技术支持</span>
            </div>
            <div class="benefit-item d-flex align-items-center mb-3">
              <i class="bi bi-check-circle-fill text-warning me-3 fs-4"></i>
              <span>丰富的项目实践机会</span>
            </div>
            <div class="benefit-item d-flex align-items-center mb-3">
              <i class="bi bi-check-circle-fill text-warning me-3 fs-4"></i>
              <span>参加各类科技竞赛</span>
            </div>
            <div class="benefit-item d-flex align-items-center mb-3">
              <i class="bi bi-check-circle-fill text-warning me-3 fs-4"></i>
              <span>与志同道合的伙伴共同成长</span>
            </div>
          </div>

          <div class="join-requirements mb-5">
            <h5 class="fw-bold mb-3">加入要求</h5>
            <ul class="list-unstyled">
              <li class="mb-2">• 海口四中在校学生</li>
              <li class="mb-2">• 对科技有浓厚兴趣</li>
              <li class="mb-2">• 愿意学习新知识</li>
              <li class="mb-2">• 有团队合作精神</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="join-slogan text-center">
            <!-- 简洁版招新口号 -->
            <div class="slogan-card bg-white rounded-4 p-5 mb-4 shadow-sm">
              <h3 class="fw-bold text-dark mb-3">加入四中科技社</h3>
              <div class="lead text-muted">
                从土地到屏幕，从代码到文创，总有一款适合你！
              </div>
            </div>
            
            <!-- 分组版招新口号 -->
            <div class="slogan-card bg-white rounded-4 p-4 mb-4 shadow-sm">
              <h5 class="fw-bold text-dark mb-3">七重身份，一个社团！</h5>
              <div class="row g-2 text-start">
                <div class="col-md-6">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-cpu text-primary me-2"></i>
                    <small class="text-muted">科创组搞发明</small>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-robot text-success me-2"></i>
                    <small class="text-muted">机器人组玩电路</small>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-airplane text-info me-2"></i>
                    <small class="text-muted">航模组飞上天</small>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-flower1 text-warning me-2"></i>
                    <small class="text-muted">青芽营养花草</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-brush text-danger me-2"></i>
                    <small class="text-muted">文创工坊做香囊</small>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-cpu-fill text-secondary me-2"></i>
                    <small class="text-muted">AI组训模型</small>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-camera text-dark me-2"></i>
                    <small class="text-muted">融媒体组拍大片</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-info bg-white rounded-4 p-4 shadow-sm">
              <p class="text-muted small mb-0">
                每个学期初，科技社都会组织招新活动，欢迎对科技感兴趣的同学们踊跃报名！
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 文艺版招新口号 -->
      <div class="row mt-5 pt-5">
        <div class="col-12">
          <div class="bg-white rounded-4 p-5 text-dark text-center shadow-sm">
            <h3 class="fw-bold mb-3">与世界温柔交手</h3>
            <p class="lead text-muted mb-4">
              种一株香草，做一个香囊，写一段代码，拍一部短片。<br>
              在四中科技社，与世界温柔交手。
            </p>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="feature-item">
                  <i class="bi bi-tree text-success display-6 mb-3"></i>
                  <h5 class="fw-bold">从土地到生活</h5>
                  <p class="text-muted small">青芽营的生态种植，让科技与自然和谐共生</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-item">
                  <i class="bi bi-gear text-primary display-6 mb-3"></i>
                  <h5 class="fw-bold">从传统到智能</h5>
                  <p class="text-muted small">文创工坊的数字制造，让传统工艺焕发新生</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-item">
                  <i class="bi bi-lightbulb text-warning display-6 mb-3"></i>
                  <h5 class="fw-bold">从创意到现实</h5>
                  <p class="text-muted small">科创组的项目实践，让创意落地成真</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 加入我们组件逻辑
</script>

<style scoped>
.benefit-item {
  font-size: 1.1rem;
}

.slogan-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.slogan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1) !important;
}

.feature-item {
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-3px);
}

.contact-info {
  transition: all 0.3s ease;
}

.contact-info:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}
</style>