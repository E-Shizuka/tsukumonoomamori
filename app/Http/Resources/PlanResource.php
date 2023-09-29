<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'plan_id' => $this->id,
            'plan_name' => $this->plan_name,
            'plan_image' => $this->image_name,
            'ryokan_id' => $this->ryokan_id,
            'ryokan_name' => optional($this->ryokan)->ryokan_name, // 旅館名を追加
            'ryokan_prefectures' => optional($this->ryokan)->ryokan_prefectures, // 旅館の所在地を追加
            'omamori_id' => $this->omamori_id,
            'omamori_name' => optional($this->omamori)->omamori_name, // お守り名を追加
        ];
    }
}
