Rails.application.routes.draw do
  root 'hamfamilylaw#home'

  get '/home' => 'hamfamilylaw#home'
  get '/about' => 'hamfamilylaw#about'
  get '/blog' => 'hamfamilylaw#blog'
  get '/practice' => 'hamfamilylaw#practice'
  get '/testimonials' => 'hamfamilylaw#testimonials'
  get '/contact' => 'hamfamilylaw#contact'
end
