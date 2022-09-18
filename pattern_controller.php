<?php

remove_theme_support("core-block-patterns");

register_block_pattern_category("hero", [
  "label" => __("Hero"),
]);

register_block_pattern_category("titles", [
  "label" => __("Titles"),
]);

register_block_pattern_category("column_layout", [
  "label" => __("Column Layout"),
]);

register_block_pattern_category("page_starter", [
  "label" => __("Page Starter"),
]);

register_block_pattern_category("footers", [
  "label" => __("Footers"),
]);

register_block_pattern_category("utilities", [
  "label" => __("Utilities"),
]);